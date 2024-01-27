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
      }
    });

    return phrases.map(phrase => ({
      id: phrase.id,
      sceneName: phrase.scene.name,
      phrase: phrase.phrase,
      japaneseTranslation: phrase.japaneseTranslation,
      createdAt: phrase.createdAt,
      updatedAt: phrase.updatedAt,
      tags: phrase.phraseTags.map(pt => pt.tag.tag)
    }));
  }

  async createPhrase(data: CreatePhraseDto) {
    return this.prisma.phrase.create({
      data,
    });
  }

  async searchPhrases(q: string) {
    return this.prisma.phrase.findMany({
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
  }

  async suggestPhrases(q: string): Promise<string[]> {
    const results = await this.prisma.phrase.findMany({
      where: {
        phrase: {
          contains: q,
          mode: 'insensitive',
        },
      },
      take: 10,
      select: {
        phrase: true,
      },
    });

    return results.map((result) => result.phrase);
  }
}
