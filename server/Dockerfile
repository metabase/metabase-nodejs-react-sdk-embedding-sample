FROM node:22-bullseye AS runner

WORKDIR /app

COPY . .

WORKDIR /app/server

RUN npm ci

CMD ["yarn", "start"]