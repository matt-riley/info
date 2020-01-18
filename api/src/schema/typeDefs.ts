import LastFMAPI from 'src/services/lastfm';
import DiscogsAPI from '../services/discogs/index';

export interface Context {
  dataSources: {
    discogs: DiscogsAPI,
    lastfmAPI: LastFMAPI,
  };
}
