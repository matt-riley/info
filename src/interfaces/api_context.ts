import { Context } from 'apollo-server-core';
import { Logger } from 'winston';

export interface APIContext extends Context {
  LastFMApiKey: string;
  logger: Logger;
}
