import * as functions from 'firebase-functions';
import * as express from 'express';
const {
  sapper,
}: // eslint-disable-next-line @typescript-eslint/no-var-requires
{sapper: any} = require(`${__dirname}/__sapper__/server/server`);

const app = express().use(sapper.middleware());

export const svelteSsr = functions.https.onRequest(() => app);
