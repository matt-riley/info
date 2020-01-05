import { objectType } from 'nexus';
import { NexusGenRootTypes } from 'src/api-typegen';
import admin from '../../utils/firebase';

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
    t.field('country', {
      description: 'The country of release',
      nullable: false,
      type: 'String',
    });
    t.field('genres', {
      description: 'The genres of music covered by this release',
      list: [true],
      nullable: true,
      type: 'String',
    });
    t.field('artists', {
      description: 'A list of the artists',
      list: [true],
      type: ReleaseArtist,
      async resolve(root) {
        const result = root.artists.map(async ({ id }) => {
          const res = await admin.firestore().doc(`artists/${id}`).get();
          return res.data() as NexusGenRootTypes['ReleaseArtist'];
        });
        return result;
      },
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
