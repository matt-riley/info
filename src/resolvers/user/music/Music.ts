import { ApolloError } from 'apollo-server-core';
import { APIContext } from 'interfaces/api_context';

const musicResolver = {
  Music: {
    async tracks(_: void, args: any, context: APIContext) {
      try {
        context.logger.info('Getting recent track data from LastFM');
        return await context.dataSources.lastfmAPI.getRecentTracks(args);
      } catch (error) {
        context.logger.error(error);
        throw new ApolloError(error.extensions.response.body.message, error.extensions.code);
      }
    },
  },
};

export default musicResolver;
