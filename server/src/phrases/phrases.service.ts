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
    // dataを確認する
    console.log(data);

    return this.prisma.phrase.create({
      data,
    });
  }
}
