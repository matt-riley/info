import { LoggingWinston } from '@google-cloud/logging-winston';
import { createLogger, transports } from 'winston';

const loggingWinston = new LoggingWinston();

const logger = createLogger({
  level: 'info',
  transports: [
    new transports.Console({
      handleExceptions: true,
    }),
    loggingWinston,
  ],
});

export default logger;
