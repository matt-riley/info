FROM node:13.6.0-alpine AS base
ENV APP_HOME=/app
RUN mkdir ${APP_HOME}
WORKDIR ${APP_HOME}
COPY package*.json ${APP_HOME}/

FROM base AS dependencies
RUN apk add --no-cache python make g++
RUN npm ci --only=production

FROM base AS build
COPY components ${APP_HOME}/components
COPY lib ${APP_HOME}/lib
COPY pages ${APP_HOME}/pages
COPY public ${APP_HOME}/public
COPY tsconfig.json ${APP_HOME}/
RUN apk add --no-cache python make g++
RUN npm ci && npm run build

FROM base AS release
ENV NODE_ENV=production
COPY --from=dependencies ${APP_HOME}/node_modules ${APP_HOME}/node_modules
COPY --from=build ${APP_HOME}/.next ${APP_HOME}/.next
RUN mkdir pages
CMD ["npm", "start"]
