import { DataSource } from 'apollo-datasource';
import LastFMAPI from '../services/lastfm/index';

export interface DataSources extends DataSource {
  lastfmAPI: LastFMAPI;
}
