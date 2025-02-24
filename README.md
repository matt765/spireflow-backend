# Spireflow backend

Open source backend for Spireflow dashboard

## Tech stack

NodeJS, Express, PostgreSQL, Prisma, GraphQL

## Frontend

This backend fetches data from PostgreSQL database and sends it to associated NextJS frontend application

[https://github.com/matt765/spireflow](https://github.com/matt765/spireflow)

## Project Structure

```
├── src
│   ├── assets
│   │   ├── icons
│   │   └── images
│   ├── data
│   │   ├── analytics
│   │   └── homepage
│   ├── graphql
│   └── server.ts│
└── package.json
```

## How to run

You can deploy this backend on BaaS services like AWS, Back4App, Heroku or DigitalOcean

All commands are run from the root of the project, from a terminal.

| Command         | Action                            |
| :-------------- | :-------------------------------- |
| `npm install`   | Installs dependencies             |
| `npm run build` | Builds your production site       |
| `npm start`     | Starts server at `localhost:3000` |

Prisma

| Command                      | Action                                   |
| :--------------------------- | :--------------------------------------- |
| `npx prisma studio`          | Opens Prisma Studio                      |
| `npx prisma db seed`         | Seeds database with data                 |
| `npx prisma migrate deploy`  | Applies all pending migrations           |
| `npx prisma generate`        | Reads schema and generates Prisma Client |
