import { objectType } from 'nexus';
import { LastFMRecentTrack } from '../../interfaces/lastfm_recent_tracks';

const Track = objectType({
  description: 'Track information',
  name: 'Track',
  definition(t) {
    t.string('name', {
      description: 'The name of the track',
      nullable: true,
    });
    t.id('id', {
      description: 'The musicbrainz id for the track',
      nullable: true,
      resolve(root: LastFMRecentTrack) {
        return root.mbid;
      },
    });
    t.string('url', {
      description: 'The url for the last.fm page for the track',
      nullable: true,
    });
  },
});

export default Track;
