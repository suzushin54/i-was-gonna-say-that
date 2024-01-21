import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';

@Injectable()
export class PhrasesService {
  constructor(private prisma: PrismaService) {}

  async getAllPhrases() {
    return this.prisma.phrase.findMany();
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
            scene: {
              contains: q,
              mode: 'insensitive',
            },
          },
          {
            phrase: {
              contains: q,
              mode: 'insensitive',
            },
          },
          {
            tags: {
              has: q,
            },
          },
        ],
      },
    });
  }

  async suggestPhrases(q: string) {
    return this.prisma.phrase.findMany({
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
  }
}
