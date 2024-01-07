import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PhrasesService {
  constructor(private prisma: PrismaService) {}

  async getAllPhrases() {
    return this.prisma.phrase.findMany();
  }
}
