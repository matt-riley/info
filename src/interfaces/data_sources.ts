import { DataSource } from 'apollo-datasource';
import DiscogsAPI from '../services/discogs/index';
import LastFMAPI from '../services/lastfm/index';

export interface DataSources extends DataSource {
  lastfmAPI: LastFMAPI;
  discogsAPI: DiscogsAPI;
}
