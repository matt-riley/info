import {
  intArg,
  makeSchema,
  objectType,
  stringArg,
} from 'nexus';

import path from 'path';

const Feature = objectType({
  name: 'Feature',
  description: 'Feature switch type',
  definition(t) {
    t.string('project', {
      nullable: true,
      description: 'The project that the feature switch belongs to',
    });
    t.string('name', {
      nullable: true,
      description: 'Name of the feature switch',
    });
    t.boolean('enabled', {
      nullable: true,
      description: 'If the switch is on/off (true/false)',
    });
  },
});

const Music = objectType({
  name: 'Music',
  description: 'Information relating to the user relating to Music',
  definition(t) {
    t.field('tracks', {
      type: Track,
      list: [false],
      nullable: true,
      description: 'A list of the users recently played tracks',
      args: {
        limit: intArg({ description: 'Limit the amount of recently played tracks to return' }),
        page: intArg({ description: 'The page of recently played tracks which you wish to return' }),
      },
    });
  },
});

const User = objectType({
  name: 'User',
  description: 'User type - describes the user',
  definition(t) {
    t.field('music', {
      type: Music,
      nullable: true,
      description: 'Music related information',
    });
  },
});

const Query = objectType({
  name: 'Query',
  description: 'Root Query',
  definition(t) {
    t.field('features', {
      type: Feature,
      list: [false],
      nullable: true,
      description: 'Returns a list of feature switches. Available args are \'project\' and \'feature\'',
      args: {
        project: stringArg(),
        feature: stringArg(),
      },
    });
    t.field('feature', {
      type: Feature,
      nullable: true,
      description: 'Returns a single feature switch. Available args are \'project\' and \'feature\'',
      args: {
        project: stringArg({ required: true }),
        feature: stringArg({ required: true }),
      },
    });
    t.field('user', {
      type: User,
      nullable: true,
      description: 'User details',
    });
    t.field('services', {
      type: Service,
      deprecation: 'No longer needed',
      list: [false],
      nullable: true,
      description: '[DEPRECATED]: A list of services',
      args: {
        name: stringArg(),
        status: stringArg(),
        host: stringArg(),
        language: stringArg(),
      },
    });
  },
});
const Service = objectType({
  name: 'Service',
  description: 'service type',
  definition(t) {
    t.string('name', {
      nullable: true,
      description: 'Name of the service',
    });
    t.string('language', {
      nullable: true,
      description: 'Language the service is written in e.g. Ruby',
    });
    t.string('url', {
      nullable: true,
      description: 'URL of the service',
    });
    t.string('host', {
      nullable: true,
      description: 'Host of the service',
    });
    t.string('description', {
      nullable: true,
      description: 'Description of the service',
    });
    t.string('status', {
      nullable: true,
      description: 'Status of the service',
    });
  },
});
const Track = objectType({
  name: 'Track',
  description: 'Track information',
  definition(t) {
    t.string('name', {
      nullable: true,
      description: 'The name of the track',
    });
    t.id('id', {
      nullable: true,
      description: 'The musicbrainz id for the track',
    });
    t.string('url', {
      nullable: true,
      description: 'The url for the last.fm page for the track',
    });
  },
});

const schema = makeSchema({
  types: [Feature, Track, Music, Query, Service, User],
  outputs: {
    schema: path.join(__dirname, '../../schemaFiles/schema.graphql'),
    typegen: path.join(__dirname.replace(/\/lib$/, '/src'), '../api-typegen.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname.replace(/\/lib$/, '/src'), './typeDefs.ts'), alias: 't',
      },
    ],
    contextType: 't.Context',
  },
});

export default schema;
