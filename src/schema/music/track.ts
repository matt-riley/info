import { objectType } from 'nexus';

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
    });
    t.string('url', {
      description: 'The url for the last.fm page for the track',
      nullable: true,
    });
  },
});

export default Track;
