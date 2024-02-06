import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ScenesModule } from './scenes/scenes.module';
import { TagsModule } from './tags/tags.module';
import { PhrasesModule } from './phrases/phrases.module';

@Module({
  imports: [ScenesModule, TagsModule, PhrasesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
