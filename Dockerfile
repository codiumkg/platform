# Base

FROM node:20.18.0-slim AS base

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /platform

ARG VITE_BASE_URL

ENV VITE_BASE_URL=${VITE_BASE_URL}

COPY package.json pnpm-lock.yaml .npmrc  /platform/

RUN pnpm install --frozen-lockfile

COPY . .

FROM base AS production

ENV NODE_ENV=production

WORKDIR /platform

RUN npm install -g serve

RUN npm run build

EXPOSE 4200

CMD ["serve", "-s", "dist", "-p", "4200"]