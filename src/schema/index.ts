import {
  makeSchema,
  objectType,
  stringArg,
} from 'nexus';

import path from 'path';
import { NexusGenFieldTypes } from 'src/api-typegen';
import { Music, Release, Track } from './music/index';

const Query = objectType({
  description: 'Root Query',
  name: 'Query',
  definition(t) {
    t.field('music', {
      description: 'Music related stuff',
      nullable: false,
      type: Music,
      resolve() {
        return {};
      },
    });
  },
});

const Mutation = objectType({
  description: 'Root mutation',
  name: 'Mutation',
  definition(t) {
    t.field('addRelease', {
      args: {
        id: stringArg({
          description: 'The Discogs id of the release',
          required: true,
        }),
      },
      description: 'Add a release',
      type: Release,
      async resolve(root, { id }, ctx): Promise<NexusGenFieldTypes['Release']> {
        return await ctx.dataSources.discogs.addRelease(id) as NexusGenFieldTypes['Release'];
      },
    });
  },
});

const schema = makeSchema({
  outputs: {
    schema: path.join(__dirname, '../../schemaFiles/schema.graphql'),
    typegen: path.join(__dirname.replace(/\/lib$/, '/src'), '../api-typegen.ts'),
  },
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  typegenAutoConfig: {
    contextType: 't.Context',
    sources: [
      {
        alias: 't',
        source: path.join(__dirname.replace(/\/lib$/, '/src'), './typeDefs.ts'),
      },
    ],
  },
  types: [Track, Music, Query, Release, Mutation],
});

export default schema;
