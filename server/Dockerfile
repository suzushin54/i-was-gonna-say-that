FROM node:18.18.0

WORKDIR /usr/src/app

COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY prisma/schema.prisma ./prisma/

RUN npm install -g pnpm && pnpm install

RUN npx prisma generate

COPY . .

RUN pnpm run build

EXPOSE 4000

CMD ["pnpm", "run", "start:dev"]
