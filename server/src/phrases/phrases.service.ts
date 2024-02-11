import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';

@Injectable()
export class PhrasesService {
  constructor(private prisma: PrismaService) {}

  async getAllPhrases() {
    const phrases = await this.prisma.phrase.findMany({
      include: {
        scene: true,
        phraseTags: {
          include: {
            tag: true,
          },
        },
      },
    });

    return this.transformPhrases(phrases);
  }

  async createPhrase(data: CreatePhraseDto) {
    return this.prisma.$transaction(async (prisma) => {
      const { sceneId, phrase, japaneseTranslation, tagIds } = data;

      return await prisma.phrase.create({
        data: {
          sceneId,
          phrase,
          japaneseTranslation,
          phraseTags: {
            create: tagIds.map((tagId) => ({
              tagId,
            })),
          },
        },
        include: {
          scene: true,
          phraseTags: {
            include: {
              tag: true,
            },
          },
        },
      });
    });
  }

  async searchPhrases(q: string) {
    const phrases = await this.prisma.phrase.findMany({
      include: {
        scene: true,
        phraseTags: {
          include: {
            tag: true,
          },
        },
      },
      where: {
        OR: [
          {
            phrase: {
              contains: q,
              mode: 'insensitive',
            },
          },
          {
            japaneseTranslation: {
              contains: q,
              mode: 'insensitive',
            },
          },
        ],
      },
    });

    return this.transformPhrases(phrases);
  }

  async suggestPhrases(q: string): Promise<string[]> {
    // NOTE: 日本語が含まれていれば JapaneseTranslation で検索し、そうでなければ Phrase で検索
    const isQueryJapanese = isJapanese(q);

    const whereCondition = isQueryJapanese
      ? { japaneseTranslation: { contains: q, mode: 'insensitive' as const } }
      : { phrase: { contains: q, mode: 'insensitive' as const } };

    const selectField = isQueryJapanese
      ? { japaneseTranslation: true }
      : { phrase: true };

    const results = await this.prisma.phrase.findMany({
      where: { OR: [whereCondition] },
      take: 10,
      select: selectField,
    });

    return results.map((result) =>
      isQueryJapanese ? result.japaneseTranslation : result.phrase,
    );
  }

  private transformPhrases(phrases: any[]): any[] {
    return phrases.map((phrase) => ({
      id: phrase.id,
      sceneName: phrase.scene.name,
      phrase: phrase.phrase,
      japaneseTranslation: phrase.japaneseTranslation,
      createdAt: phrase.createdAt,
      updatedAt: phrase.updatedAt,
      tags: phrase.phraseTags.map((pt: { tag: { tag: string } }) => pt.tag.tag),
    }));
  }
}

// 日本語の文字範囲（ひらがな、カタカナ、漢字）を判定する
function isJapanese(str: string): boolean {
  return /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\u3400-\u4dbf\u4e00-\u9faf\uF900-\uFAFF\uFF66-\uFF9F]/.test(
    str,
  );
}
