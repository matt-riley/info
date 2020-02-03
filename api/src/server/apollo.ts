import { ApolloServer } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';
import timetree from 'time-tree';

// import allResolvers from '../resolvers';
import schema from '../schema/index';
import dataSources from '../services';
import logger from '../utils/logger';
import { timeTreeMiddleWare } from './middleware/timeTree';

const timer = timetree('API Timetree')

// const resolvers = allResolvers;

const apollo = new ApolloServer({
  context: () => ({
    DiscogsKey: process.env.DISCOGS_KEY,
    DiscogsSecret: process.env.DISCOGS_SECRET,
    LastFMKey: process.env.LASTFM_KEY,
    logger,
    timer
  }),
  dataSources,
  persistedQueries: false,
  schema: applyMiddleware(schema, timeTreeMiddleWare),
  subscriptions: false,
});

export default apollo;
