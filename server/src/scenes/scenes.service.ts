import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ScenesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.scene.findMany();
  }
}
