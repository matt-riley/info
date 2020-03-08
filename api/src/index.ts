import * as traceAgent from '@google-cloud/trace-agent';
if (process.env.NODE_ENV === 'production') {
  traceAgent.start();
}

import './utils/dotEnv';

import * as profiler from '@google-cloud/profiler';
if (process.env.NODE_ENV === 'production') {
  profiler.start();
}

import apollo from './server/apollo';
import app from './server/app';
import logger from './utils/logger';

const defaultOrigin: string[] = process.env.NODE_ENV !== 'production' ? ['https://localhost'] : [];
const origin: string[] = process.env.CORS_URLS ? process.env.CORS_URLS.split(',') : ['https://mattriley.info'];

const cors = {
  allowedHeaders: ['Authorization', 'Content-Type'],
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: defaultOrigin.concat(origin),
  preflightContinue: false,
};

apollo.applyMiddleware(
  { app, path: '/', cors },
);

const port = process.env.PORT || 8080;

try {
  app.listen({ port }, () => {
    logger.info(`🚀 Server ready!`);
  });
} catch (error) {
  logger.error(error);
}
