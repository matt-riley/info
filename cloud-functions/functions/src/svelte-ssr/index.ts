import * as functions from 'firebase-functions';
import * as express from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {sapper}: {sapper: any} = require('./__sapper__/server/server');

const app = express().use(sapper.middleware());

export const svelteSsr = functions.https.onRequest(() => app);
