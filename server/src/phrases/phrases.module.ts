import { Module } from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import { PhrasesController } from './phrases.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PhrasesService, PrismaService],
  controllers: [PhrasesController],
  exports: [],
})
export class PhrasesModule {}
