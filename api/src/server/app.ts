import * as Sentry from '@sentry/node';
import express, { NextFunction } from 'express';
import helmet from 'helmet';
import '../utils/dotEnv';

const app = express();
app.enable('trust proxy');

if (process.env.NODE_ENV === 'production') {
  app.use(helmet.hsts({
    maxAge: 31536000,
    preload: true,
  }));

  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.errorHandler());

  app.use(function onError(err: any, req: any, res: any, next: NextFunction) {
    res.statusCode = 500;
    res.end(res.sentry + '\n');
  });
}

app.disable('x-powered-by');

export default app;
