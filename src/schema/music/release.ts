import { objectType } from 'nexus';
const Release = objectType({
  description: 'Release from Discogs',
  name: 'Release',
  definition(t) {
    t.field('id', {
      description: 'ID for the release',
      nullable: false,
      type: 'ID',
    });
    t.field('title', {
      description: 'The name of the release',
      nullable: false,
      type: 'String',
    });
    t.field('artists', {
      description: 'A list of the artists',
      list: [true],
      type: ReleaseArtist,
    });
  },
});

const ReleaseArtist = objectType({
  description: 'Artist information given on the release',
  name: 'ReleaseArtist',
  definition(t) {
    t.field('id', {
      description: 'ID for the artist',
      nullable: false,
      type: 'ID',
    });
    t.field('name', {
      description: 'The name of the artist',
      nullable: false,
      type: 'String',
    });
  },
});

export default Release;
