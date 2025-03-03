FROM node:22-bullseye AS runner

WORKDIR /app

COPY ./server ./server

WORKDIR /app/server

RUN npm ci

CMD ["npm", "run", "start"]
