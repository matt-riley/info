import LastFMAPI from 'src/services/lastfm';

export interface Context {
  dataSources: {
    lastfmAPI: LastFMAPI,
  };
}
