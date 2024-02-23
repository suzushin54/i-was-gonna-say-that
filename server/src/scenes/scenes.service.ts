import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSceneDto } from './dto/create-scene.dto';

@Injectable()
export class ScenesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.scene.findMany();
  }

  create(data: CreateSceneDto) {
    const { name, note } = data;
    return this.prisma.scene.create({
      data: {
        name,
        note,
      },
    });
  }
}
