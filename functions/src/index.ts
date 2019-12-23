// import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

import * as artistInfo from './getArtist';

export const getArtist = artistInfo.getArtist;
