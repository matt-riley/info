import { ApolloServer } from 'apollo-server-express';

// import allResolvers from '../resolvers';
import schema from '../schema/index';
import dataSources from '../services';
import logger from '../utils/logger';

// const resolvers = allResolvers;

const apollo = new ApolloServer({
  context: () => ({
    DiscogsKey: process.env.DISCOGS_KEY,
    DiscogsSecret: process.env.DISCOGS_SECRET,
    LastFMKey: process.env.LASTFM_KEY,
    logger,
  }),
  dataSources,
  persistedQueries: false,
  schema,
  subscriptions: false,
});

export default apollo;
