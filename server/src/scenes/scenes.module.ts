import { Module } from '@nestjs/common';
import { ScenesService } from './scenes.service';
import { ScenesController } from './scenes.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [ScenesService, PrismaService],
  controllers: [ScenesController],
  exports: [],
})
export class ScenesModule {}
