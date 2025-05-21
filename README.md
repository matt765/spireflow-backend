# Spireflow backend

Open source backend for Spireflow dashboard

## Tech stack

NodeJS, Express, PostgreSQL, Prisma, GraphQL, Docker

## Frontend

This backend fetches data from PostgreSQL database and sends it to associated NextJS frontend application

[https://github.com/matt765/spireflow](https://github.com/matt765/spireflow)

## Project Structure

```
├── prisma
│   └── migrations
├── src
│   ├── assets
│   │   ├── icons
│   │   └── images
│   ├── data
│   │   ├── analytics
│   │   └── homepage
│   ├── graphql
│   └── server.ts
└── package.json
```

## How to run

You can deploy this backend on services like AWS, Back4App, Heroku or DigitalOcean. Alternatively, you can run it locally using commands below and access the data using GraphQL UI http://localhost:4000/graphql or Prisma Studio http://localhost:5555/

All commands are run from the root of the project, from a terminal.

| Command         | Action                            |
| :-------------- | :-------------------------------- |
| `npm install`   | Installs dependencies             |
| `npm run build` | Builds your production site       |
| `npm start`     | Starts server at `localhost:4000` |

Prisma

| Command                              | Action                                                 |
| :----------------------------------- | :----------------------------------------------------- |
| `npx prisma migrate dev --name init` | Creates and applies migrations based on schema changes |
| `npx prisma migrate deploy`          | Optional: applies already existing migrations          |
| `npx prisma generate`                | Optional: reads schema and generates Prisma Client     |
| `npx prisma db seed`                 | Seeds database with data                               |
| `npx prisma studio`                  | Opens Prisma Studio                                    |

## Docker support

You can run this application in a containerized environment using Docker, which ensures consistent deployment across different environments and simplifies the setup process by bundling all dependencies together.

| Command                                                      | Action                                      |
| :----------------------------------------------------------- | :------------------------------------------ |
| `docker build -t spireflow .`                                | Builds a Docker image from the Dockerfile   |
| `docker run -p 4000:4000 -e DATABASE_URL="DB_URL" spireflow` | Runs the container with database connection |
