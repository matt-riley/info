import { intArg, objectType } from 'nexus';
import MusicCollection from './music_collection';
import Track from './track';

const Music = objectType({
  description: 'Information relating to the user relating to Music',
  name: 'Music',
  definition(t) {
    t.field('recentTracks', {
      args: {
        limit: intArg({ description: 'Limit the amount of recently played tracks to return' }),
        page: intArg({ description: 'The page of recently played tracks which you wish to return' }),
      },
      description: 'A list of my recently played tracks',
      list: [true],
      nullable: true,
      type: Track,
      async resolve(root, args, ctx) {
        return await ctx.dataSources.lastfmAPI.getRecentTracks({ ...args });
      },
    });
    t.field('collection', {
      description: 'My music collection',
      list: [false],
      nullable: false,
      type: MusicCollection,
      resolve(root) {
        return root;
      },
    });
  },
});

export default Music;
