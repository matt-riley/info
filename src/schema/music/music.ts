import { intArg, objectType } from 'nexus';
import Track from './track';

const Music = objectType({
  description: 'Information relating to the user relating to Music',
  name: 'Music',
  definition(t) {
    t.field('tracks', {
      args: {
        limit: intArg({ description: 'Limit the amount of recently played tracks to return' }),
        page: intArg({ description: 'The page of recently played tracks which you wish to return' }),
      },
      description: 'A list of the users recently played tracks',
      list: [true],
      nullable: true,
      type: Track,
      resolve(root, args, ctx) {
        return ctx.dataSources.lastfmAPI.getRecentTracks({ ...args });
      },
    });
  },
});

export default Music;
