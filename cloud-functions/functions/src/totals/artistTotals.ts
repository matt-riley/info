import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const firestore = admin.firestore();

export const artistTotals = functions.firestore
  .document('/artists/{artistId}')
  .onCreate(async event => {
    const currentData = await firestore.doc(`totals/artists`).get();
    const data = currentData.data();
    const newTotal = data !== undefined ? data.total + 1 : 1;
    firestore.doc(`totals/artists`).set({
      total: newTotal,
    });
  });
