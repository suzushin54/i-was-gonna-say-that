# I was gonna say that

## Introduction

**I was gonna say that** is a service designed to support those "I was gonna say that" moments in English conversations. 

The application allows users to view a list of phrases and register new ones, providing a handy reference for language learners or anyone looking to polish their conversational skills.

![iwgst-site-image](https://github.com/suzushin54/i-was-gonna-say-that/assets/16548805/6d4af6da-d2c6-49b9-9c24-f80a3c90bb69)

## Features

- Browse a list of useful English phrases for various situations.
- Add new phrases to the collection with details like scene and tags.

## Frontend

- TypeScript
- Next.js 14.x
  - AppRouter
  - ServerActions

## Backend

- TypeScript
- NestJS 10.x
- Prisma ORM 5.x
- PostgreSQL 13.x

## Getting Started

To run the application locally, ensure you have Docker and Docker Compose installed on your system.

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to build and start the services:

```sh
make build
make start
make init-db
```    
