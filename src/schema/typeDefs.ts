import LastFMAPI from 'src/services/lastfm';

export interface Feature {
  enabled: boolean;
  name: string;
  project: string;
}

export interface Context {
  dataSources: {
    lastfmAPI: LastFMAPI,
  };
}
