import { resolve } from 'dns';
import { idArg, intArg, objectType, stringArg } from 'nexus';
import Release from './release';

const MusicCollection = objectType({
  description: 'My Music collection',
  name: 'MusicCollection',
  definition(t) {
    t.field('releases', {
      description: 'All the releases (i.e. Albums/12"s) in the collection',
      list: [true],
      nullable: false,
      type: Release,
      async resolve(root, args, context, info) {
        return root;
      },
    });
    t.field('release', {
      args: {
        id: idArg({ description: 'The id of the release' }),
      },
      description: 'Information for an individual release',
      list: [false],
      nullable: false,
      type: Release,
      async resolve(root, args, context, info) {
        return root;
      },
    });
  },
});

export default MusicCollection;
