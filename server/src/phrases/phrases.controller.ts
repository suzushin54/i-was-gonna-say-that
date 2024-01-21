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
  async search(@Query('q') q: string) {
    return this.phrasesService.searchPhrases(q);
  }

  @Get('suggest')
  async suggest(@Query('q') q: string) {
    return this.phrasesService.suggestPhrases(q);
  }
}
