import * as admin from 'firebase-admin';

admin.initializeApp();

import * as discogsArtistInfo from './getArtist';
import * as discogsLabelInfo from './getLabel';
import * as totals from './totals';
import * as tmpImgs from './getImages';
import * as updImgs from './updateImgs';
import * as home from './svelte-ssr';

export const getArtist = discogsArtistInfo.getArtist;
export const getLabel = discogsLabelInfo.getLabel;
export const artistTotals = totals.artistTotals;
export const releaseTotals = totals.releaseTotals;
export const getArtistImgs = tmpImgs.getArtistImgs;
export const getReleaseImgs = tmpImgs.getReleaseImgs;
export const getLabelImgs = tmpImgs.getLabelImgs;
export const updateImgs = updImgs.updateImgs;
export const svelteSsr = home.svelteSsr;
