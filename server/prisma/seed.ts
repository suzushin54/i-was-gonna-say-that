import { PrismaClient } from '@prisma/client';
import { phrases } from './data.json';

const prisma = new PrismaClient();

async function main() {
  for (const phrase of phrases) {
    await prisma.phrase.create({
      data: phrase,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
