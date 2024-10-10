# Base

FROM node:20.17.0-alpine AS base

WORKDIR /platform

COPY package*.json /

RUN npm install

COPY . .

# Development

FROM base AS dev 

EXPOSE 4200

CMD ["npm", "run", "dev"]

# Production

FROM base AS production

WORKDIR /platform

RUN npm run build

EXPOSE 4200

CMD ["npm", "run", "preview"]