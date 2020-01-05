import * as admin from 'firebase-admin';

admin.initializeApp();

import * as discogsArtistInfo from './getArtist';
import * as discogsLabelInfo from './getLabel';
import * as totals from './totals';

export const getArtist = discogsArtistInfo.getArtist;
export const getLabel = discogsLabelInfo.getLabel;
export const artistTotals = totals.artistTotals;
export const releaseTotals = totals.releaseTotals;
