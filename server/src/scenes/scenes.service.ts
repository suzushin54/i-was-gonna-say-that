import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSceneDto } from './dto/create-scene.dto';

@Injectable()
export class ScenesService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number) {
    const scene = await this.prisma.scene.findUnique({
      where: { id: Number(id) },
    });

    if (!scene) {
      return;
    }

    return scene;
  }

  findAll() {
    return this.prisma.scene.findMany({
      orderBy: {
        id: 'asc',
      },
    });
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
