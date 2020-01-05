import { objectType } from 'nexus';
import { NexusGenFieldTypes, NexusGenRootTypes } from 'src/api-typegen';
import admin from '../../utils/firebase';
import Artist from './artist';

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
      type: Artist,
      async resolve(root: NexusGenFieldTypes['Release']) {
        const result = root.artists.map(async ({ id }) => {
          const res = await admin.firestore().doc(`artists/${id}`).get();
          return res.data() as NexusGenRootTypes['Artist'];
        });
        return result;
      },
    });
  },
});

export default Release;
