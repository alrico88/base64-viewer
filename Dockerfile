# syntax = docker/dockerfile:1.2.1

ARG NODE_VERSION=node:24.9.0-alpine

FROM $NODE_VERSION AS dependency-base

RUN corepack enable

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY package.json .
COPY pnpm-lock.yaml .
COPY .npmrc .
RUN pnpm install --frozen-lockfile

FROM dependency-base AS production-base

# build will also take care of building
# if necessary
COPY . .
RUN pnpm run build

FROM $NODE_VERSION AS production

COPY --from=production-base /app/.output /app/.output

# Service hostname
ENV NUXT_HOST=0.0.0.0

# Run in production mode
ENV NODE_ENV=production

# start the app
CMD [ "node", "/app/.output/server/index.mjs" ]
