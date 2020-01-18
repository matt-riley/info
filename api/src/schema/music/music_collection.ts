import { idArg, objectType} from 'nexus';
import { NexusGenFieldTypes } from 'src/api-typegen';
import admin from '../../utils/firebase';
import Artist from './artist';
import Label from './label';
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
      async resolve(): Promise<Array<NexusGenFieldTypes['Artist']>> {
        const res = await admin.firestore().collection(`artists`).get();
        return res.docs.map((doc) => {
          return doc.data() as NexusGenFieldTypes['Artist'];
        });
      },
    });
    t.field('artist', {
      args: {
        id: idArg({
          description: 'The id of the artist',
          required: true,
        }),
      },
      description: 'Information for an individual artist',
      nullable: false,
      type: Artist,
      async resolve(root, args): Promise<NexusGenFieldTypes['Artist']> {
        const res = await admin.firestore().doc(`artists/${args.id}`).get();
        return res.data() as NexusGenFieldTypes['Artist'];
      },
    });
    t.field('labels', {
      description: 'All the labels in the collection',
      list: [true],
      nullable: false,
      type: Label,
      async resolve(): Promise<Array<NexusGenFieldTypes['Label']>> {
        const res = await admin.firestore().collection(`labels`).get();
        return res.docs.map((doc) => {
          return doc.data() as NexusGenFieldTypes['Label'];
        });
      },
    });
    t.field('label', {
      args: {
        id: idArg({
          description: 'The id of the label',
          required: true,
        }),
      },
      description: 'Information for an individual label',
      nullable: false,
      type: Label,
      async resolve(root, args): Promise<NexusGenFieldTypes['Label']> {
        const res = await admin.firestore().doc(`labels/${args.id}`).get();
        return res.data() as NexusGenFieldTypes['Label'];
      },
    });
    t.field('releases', {
      description: 'All the releases (i.e. Albums/12"s) in the collection',
      list: [true],
      nullable: false,
      type: Release,
      async resolve(): Promise<Array<NexusGenFieldTypes['Release']>> {
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
