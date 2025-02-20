FROM node:22-bullseye AS runner

WORKDIR /app

COPY . .

WORKDIR /app/client

RUN npm ci

RUN if [ -d "../local-dist/embedding-sdk" ]; then \
      npm install file:../local-dist/embedding-sdk --install-links; \
    else \
      echo "Local embedding-sdk dist is not found in ../local-dist/embedding-sdk, skipping copy"; \
    fi

CMD ["yarn", "start", "--host"]