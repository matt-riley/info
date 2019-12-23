import * as admin from 'firebase-admin';

admin.initializeApp();

import * as discogsArtistInfo from './getArtist';
import * as discogsLabelInfo from './getLabel';

export const getArtist = discogsArtistInfo.getArtist;
export const getLabel = discogsLabelInfo.getLabel;
