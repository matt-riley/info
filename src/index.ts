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

import server from './server';

server();
