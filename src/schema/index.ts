import {
  intArg,
  makeSchema,
  objectType,
  stringArg,
} from 'nexus';

import path from 'path';
import { Music, Release, Track } from './music/index';
import { User } from './user';

const Query = objectType({
  description: 'Root Query',
  name: 'Query',
  definition(t) {
    t.field('user', {
      description: 'User details',
      nullable: true,
      type: User,
    });
  },
});

const Mutation = objectType({
  description: 'Root mutation',
  name: 'Mutation',
  definition(t) {
    t.field('addRelease', {
      args: {
        id: stringArg(),
      },
      description: 'Add a release',
      type: Release,
      resolve(_root, { id }, ctx) {
        return ctx.dataSources.discogs.addRelease(id);
      },
    });
  },
});

const schema = makeSchema({
  outputs: {
    schema: path.join(__dirname, '../../schemaFiles/schema.graphql'),
    typegen: path.join(__dirname.replace(/\/lib$/, '/src'), '../api-typegen.ts'),
  },
  typegenAutoConfig: {
    contextType: 't.Context',
    sources: [
      {
        alias: 't',
        source: path.join(__dirname.replace(/\/lib$/, '/src'), './typeDefs.ts'),
      },
    ],
  },
  types: [Track, Music, Query, Release, User, Mutation],
});

export default schema;
