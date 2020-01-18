FROM node:13.6.0-alpine AS base
ENV APP_HOME=/app
RUN mkdir ${APP_HOME}
WORKDIR ${APP_HOME}
COPY package*.json ${APP_HOME}/

FROM base AS dependencies
RUN apk add --no-cache python make g++
RUN npm ci --only=production

FROM base AS build
COPY src ${APP_HOME}/src
COPY tsconfig.json tslint.json ${APP_HOME}/
RUN apk add --no-cache python make g++
RUN npm ci && npm run build

FROM base AS release
COPY --from=dependencies ${APP_HOME}/node_modules ${APP_HOME}/node_modules
COPY --from=build ${APP_HOME}/lib ${APP_HOME}/lib
EXPOSE 8080
CMD ["npm", "start"]
