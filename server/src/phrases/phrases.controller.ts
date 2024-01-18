import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Get()
  async getAll() {
    return this.phrasesService.getAllPhrases();
  }

  @Post()
  create(@Body() createPhraseDto: CreatePhraseDto) {
    return this.phrasesService.createPhrase(createPhraseDto);
  }

  @Get('search')
  async search(@Query('query') query: string) {
    return this.phrasesService.searchPhrases(query);
  }
}
