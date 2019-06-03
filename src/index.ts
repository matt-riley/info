import * as traceAgent from '@google-cloud/trace-agent';
if (process.env.NODE_ENV === 'production') {
  traceAgent.start();
}

import * as debugAgent from '@google-cloud/debug-agent';
if (process.env.NODE_ENV === 'production') {
  debugAgent.start();
}

import './utils/dotEnv';

import * as profiler from '@google-cloud/profiler';
if (process.env.NODE_ENV === 'production') {
  profiler.start();
}

import apollo from './server/apollo';
import app from './server/app';
import logger from './utils/logger';

apollo.applyMiddleware({ app, path: '/' });

const port = process.env.PORT || 8080;
const server = app.listen({ port }, () => {
  logger.info(`🚀 Server ready!`);
});
