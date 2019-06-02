import { LastFMRecentTrack } from 'interfaces/lastfm_recent_tracks';

const track = {
  Track: {
    id(parentValue: LastFMRecentTrack) {
      return parentValue.mbid;
    },
  },
};

export default track;
