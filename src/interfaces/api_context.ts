import { Context } from 'apollo-server-core';
import { Logger } from 'winston';
import { DataSources } from './data_sources';

export interface APIContext extends Context {
  dataSources: DataSources;
  LastFMKey: string;
  DiscogsKey: string;
  logger: Logger;
}
