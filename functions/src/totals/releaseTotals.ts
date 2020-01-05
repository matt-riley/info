import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {Releases} from '../interfaces/releases';

const firestore = admin.firestore();

export const releaseTotals = functions.firestore
  .document('/releases/{releaseId}')
  .onCreate(async event => {
    const data = event.data() as Releases | undefined;
    if (!data) return false;
    const totalDoc = await firestore.doc(`totals/releases`).get();
    const totalData = totalDoc.data();
    const currentTotals =
      totalData !== undefined
        ? totalData
        : {
            total: 0,
            formats: {},
            genres: {},
          };
    const newFormatData = data.format.reduce(
      (prev: {[key: string]: number}, current) => {
        if (current.name !== 'All Media') {
          prev[current.name] = currentTotals.formats[current.name] += 1;
        }
        current.descriptions.forEach(
          desc => (prev[desc] = currentTotals.formats[desc] += 1),
        );
        return prev;
      },
      {},
    );

    const newGenreData = data.genres.forEach(
      genre => (currentTotals.genres[genre] += 1),
    );

    const newData = {
      total: currentTotals.total += 1,
      formats: newFormatData,
      genres: newGenreData,
    };
    firestore.doc(`totals/releases`).update(newData);
    return true;
  });
