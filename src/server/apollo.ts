import { MemcachedCache } from 'apollo-server-cache-memcached';
import { ApolloServer, gql } from 'apollo-server-express';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

import allResolvers from '../resolvers';
import schema from '../schema/index';
import dataSources from '../services';
import logger from '../utils/logger';

const typeDefs = schema;

const resolvers = allResolvers;

const memcache = new MemcachedCache(process.env.MEMCACHE_URL, {
  retries: 10,
  retry: 20000,
});

const persistedQueries = process.env.NODE_ENV === 'production' ? { cache: memcache } : false;
const plugins = process.env.NODE_ENV === 'production' ? [responseCachePlugin()] : [];
const cache = process.env.NODE_ENV === 'production' ? memcache : undefined;

const apollo = new ApolloServer({
  cache,
  context: () => ({
    LastFMKey: process.env.LASTFM_KEY,
    logger,
  }),
  dataSources,
  introspection: true,
  persistedQueries,
  playground: true,
  plugins,
  resolvers,
  typeDefs,
});

export default apollo;
