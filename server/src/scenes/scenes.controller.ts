import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ScenesService } from './scenes.service';
import { CreateSceneDto } from './dto/create-scene.dto';

@Controller('scenes')
export class ScenesController {
  constructor(private readonly sceneService: ScenesService) {}

  @Get(':id')
  getSceneById(@Param('id', ParseIntPipe) id: number) {
    return this.sceneService.findOne(id);
  }

  @Get()
  findAll() {
    return this.sceneService.findAll();
  }

  @Post()
  create(@Body() createSceneDto: CreateSceneDto) {
    return this.sceneService.create(createSceneDto);
  }
}
