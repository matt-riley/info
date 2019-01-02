
FROM node:11.5.0-alpine AS base
ENV APP_HOME=/app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
COPY package-lock.json package.json $APP_HOME/

FROM base AS dependencies
RUN apk --virtual .build-deps --no-cache add python2 make g++ 
RUN npm ci

FROM base AS releaseDependencies
RUN apk --virtual .build-deps --no-cache add python2 make g++ 
RUN npm ci --only=production

FROM dependencies AS build
COPY tsconfig.json tslint.json $APP_HOME/
COPY src $APP_HOME/src
RUN npm run build

FROM base AS release
LABEL version="0.0.1"
ENV NODE_ENV=production
COPY --from=releaseDependencies $APP_HOME/node_modules $APP_HOME/node_modules
COPY --from=build $APP_HOME/lib $APP_HOME/lib
EXPOSE 3000
CMD ["npm", "run", "start-server"]