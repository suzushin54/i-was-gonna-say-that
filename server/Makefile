# Makefile for NestJS and Prisma project with pnpm

# Start the application using Docker Compose
start:
	docker compose up

# Stop the application
stop:
	docker compose down

# Build the application
build:
	rm -rf dist
	docker compose build

# Run Prisma migrations to update the database schema
migrate-db:
	pnpm prisma migrate dev

# Seed the database with initial data
seed:
	docker-compose exec api pnpm prisma db seed

# Generate Prisma client
generate-prisma:
	pnpm prisma generate

# Reset the database and run migrations
reset-db:
	pnpm prisma migrate reset

# Shortcut for installing node modules
install:
	pnpm install

.PHONY: start-dev build migrate-db seed-db generate-prisma reset-db install
