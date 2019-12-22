import DiscogsAPI from './discogs';
import LastFMAPI from './lastfm';

const dataSources = () => {
  return {
    discogs: new DiscogsAPI(),
    lastfmAPI: new LastFMAPI(),
  };
};

export default dataSources;
