import { MemcachedCache } from 'apollo-server-cache-memcached';
import { ApolloServer, gql } from 'apollo-server-express';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

import allResolvers from '../resolvers';
import schema from '../schema/index';

const typeDefs = schema;

const resolvers = allResolvers;

const memcache = new MemcachedCache(process.env.MEMCACHE_URL, {
  retries: 10,
  retry: 20000,
});

const apollo = new ApolloServer({
  cache: memcache,
  context: () => ({
    LastFMApiKey: process.env.LASTFM_KEY,
  }),
  persistedQueries: {
    cache: memcache,
  },
  plugins: [responseCachePlugin()],
  resolvers,
  typeDefs,
});

export default apollo;
