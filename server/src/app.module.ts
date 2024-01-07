import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PhrasesModule } from './phrases/phrases.module';

@Module({
  imports: [PhrasesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
