import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PhrasesModule } from './phrases/phrases.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [PhrasesModule, TagsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
