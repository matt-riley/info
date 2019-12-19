import { ApolloServer } from 'apollo-server-express';

// import allResolvers from '../resolvers';
import schema from '../schema/index';
import dataSources from '../services';
import logger from '../utils/logger';

// const resolvers = allResolvers;

const apollo = new ApolloServer({
  context: () => ({
    LastFMKey: process.env.LASTFM_KEY,
    logger,
  }),
  dataSources,
  persistedQueries: false,
  subscriptions: false,
  schema,
});

export default apollo;
