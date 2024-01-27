# Makefile for NestJS and Prisma project with pnpm

# Start the application using Docker Compose
start:
	docker compose up

# Stop the application
stop:
	docker compose down

# Build the application
build:
	docker compose build --no-cache

# Build the API
build-api:
	rm -rf ./server/dist
	docker compose build api --no-cache

# Build the web app
build-web:
	docker compose build web --no-cache

init-db:
	docker compose exec api pnpm prisma migrate dev --name init

# Run Prisma migrations to update the database schema
migrate:
	docker compose exec api pnpm prisma migrate dev

# Generate Prisma client
prisma-gen:
	docker compose exec api pnpm prisma generate

# Reset the database and run migrations
reset-db:
	docker compose exec api pnpm prisma migrate reset


# Shortcut for installing node modules
install:
	cd server && pnpm install
	cd web && pnpm install

.PHONY: start-dev build migrate-db seed-db generate-prisma reset-db install
