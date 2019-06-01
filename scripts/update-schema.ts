import { makeExecutableSchema } from 'apollo-server-express';
import fs from 'fs';
import { printSchema } from 'graphql/utilities';
import path from 'path';

import resolvers from '../src/resolvers';
import schema from '../src/schema';

const executableSchema = makeExecutableSchema({
  resolvers,
  typeDefs: schema,
});

const outputDir = path.join(__dirname, '../schemaFiles');
const typeSystemFile = path.join(outputDir, '/schema.graphql');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(typeSystemFile, printSchema(executableSchema));
// tslint:disable-next-line: no-console
console.log(`Type system generated and written to ${typeSystemFile}`);
