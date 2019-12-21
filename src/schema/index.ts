import {
  intArg,
  makeSchema,
  objectType,
  stringArg,
} from 'nexus';

import path from 'path';
import Feature from './feature';
import { Music, Track } from './music/index';
import { Service } from './services';
import { User } from './user';

const Query = objectType({
  description: 'Root Query',
  name: 'Query',
  definition(t) {
    t.field('features', {
      args: {
        feature: stringArg(),
        project: stringArg(),
      },
      description: 'Returns a list of feature switches. Available args are \'project\' and \'feature\'',
      list: [false],
      nullable: true,
      type: Feature,
    });
    t.field('feature', {
      args: {
        feature: stringArg({ required: true }),
        project: stringArg({ required: true }),
      },
      description: 'Returns a single feature switch. Available args are \'project\' and \'feature\'',
      nullable: true,
      type: Feature,
    });
    t.field('user', {
      description: 'User details',
      nullable: true,
      type: User,
    });
    t.field('services', {
      args: {
        host: stringArg(),
        language: stringArg(),
        name: stringArg(),
        status: stringArg(),
      },
      deprecation: 'No longer needed',
      description: '[DEPRECATED]: A list of services',
      list: [false],
      nullable: true,
      type: Service,
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
  types: [Feature, Track, Music, Query, Service, User],
});

export default schema;
