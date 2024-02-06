import { Controller, Get } from '@nestjs/common';
import { ScenesService } from './scenes.service';

@Controller('scenes')
export class ScenesController {
  constructor(private readonly sceneService: ScenesService) {}

  @Get()
  findAll() {
    return this.sceneService.findAll();
  }
}
