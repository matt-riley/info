import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {Releases} from '../interfaces/releases';

const firestore = admin.firestore();

export interface ReleaseTotals {
  total?: number;
  formats?: {[key: string]: number};
  genres?: {[key: string]: number};
}

export const releaseTotals = functions.firestore
  .document('/releases/{releaseId}')
  .onCreate(async event => {
    const data = event.data() as Releases | undefined;
    if (!data) return false;
    const totalDoc = await firestore.doc(`totals/releases`).get();
    const totalData = totalDoc.data();
    const existingTotals = (totalData === undefined) ? {total: 0, formats: {}, genres: {}} : totalData; 
    let newData: ReleaseTotals = {};

    const newFormats = data.format.reduce((prev:{[key: string]: number}, curr) => {
      if(curr.name !== 'All Media') prev[curr.name] = (existingTotals?.formats[curr.name]) ? existingTotals.formats[curr.name] + 1 : 1;
      prev[curr.descriptions[0]] = (existingTotals?.formats[curr.descriptions[0]]) ? existingTotals.formats[curr.descriptions[0]] + 1 : 1;
      return prev;
    }, {})
    const newGenres = data.genres.reduce((prev:{[key: string]: number}, curr) => {
      prev[curr] = (existingTotals?.genres[curr]) ? existingTotals.genres[curr] + 1 : 1;
      return prev
    }, {})

    newData.formats = {
      ...existingTotals.formats,
      ...newFormats
    };
    newData.genres = {
      ...existingTotals.genres,
      ...newGenres
    };
    newData.total = existingTotals.total + 1;
    firestore.doc(`totals/releases`).set(newData);
    return true;
  });
