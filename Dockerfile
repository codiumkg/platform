# Base

FROM node:20.18.0-slim AS base

WORKDIR /platform

ARG VITE_BASE_URL

ENV VITE_BASE_URL=${VITE_BASE_URL}

COPY package*.json /platform/

RUN npm install

COPY . .

# Development

FROM base AS dev 

ENV NODE_ENV=development

EXPOSE 4200

CMD ["npm", "run", "dev"]

# Production

FROM base AS production

ENV NODE_ENV=production

WORKDIR /platform

RUN npm install -g serve

RUN npm run build

EXPOSE 4200

CMD ["serve", "-s", "dist", "-p", "4200"]