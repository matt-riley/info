import { idArg, objectType} from 'nexus';
import { NexusGenFieldTypes } from 'src/api-typegen';
import admin from '../../utils/firebase';
import Artist from './artist';
import Release from './release';

const MusicCollection = objectType({
  description: 'My Music collection',
  name: 'MusicCollection',
  definition(t) {
    t.field('artists', {
      description: 'All the artists in the collection',
      list: [true],
      nullable: false,
      type: Artist,
      async resolve(root): Promise<Array<NexusGenFieldTypes['Artist']>> {
        const res = await admin.firestore().collection(`artists`).get();
        return res.docs.map((doc) => {
          return doc.data() as NexusGenFieldTypes['Artist'];
        });
      },
    });
    t.field('releases', {
      description: 'All the releases (i.e. Albums/12"s) in the collection',
      list: [true],
      nullable: false,
      type: Release,
      async resolve(root): Promise<Array<NexusGenFieldTypes['Release']>> {
        const res = await admin.firestore().collection(`releases`).get();
        return res.docs.map((doc) => {
          return doc.data() as NexusGenFieldTypes['Release'];
        });
      },
    });
    t.field('release', {
      args: {
        id: idArg({
          description: 'The id of the release',
          required: true,
        }),
      },
      description: 'Information for an individual release',
      nullable: false,
      type: Release,
      async resolve(root, args): Promise<NexusGenFieldTypes['Release']> {
        const res = await admin.firestore().doc(`releases/${args.id}`).get();
        return res.data() as NexusGenFieldTypes['Release'];
      },
    });
  },
});

export default MusicCollection;
