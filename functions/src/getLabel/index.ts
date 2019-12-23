import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import fetch from 'node-fetch';
import {DiscogsLabelResponse} from '../interfaces/discogsLabelResponse';

const firestore = admin.firestore();

export const getLabel = functions.firestore
  .document('/releases/{releaseId}')
  .onCreate(async event => {
    const data = event.data();
    if (!data) return false;

    for (const label of data.labels) {
      console.log(label);
      await fetch(
        `https://api.discogs.com/labels/${label.id}?key=${
          functions.config().discogs.key
        }&secret=${functions.config().discogs.secret}`,
      )
        .then(res => {
          return res.json();
        })
        .then(async (json: DiscogsLabelResponse) => {
          console.log(json);
          const saveLabelInfo = {
            description: json.profile ? json.profile : '',
            name: json.name,
            contactInfo: json.contact_info ? json.contact_info : '',
            images: json.images ? json.images : [''],
            urls: json.urls ? json.urls : [''],
            sublabels: json.sublabels
              ? json.sublabels.map(sublabel => {
                  return {
                    id: sublabel.id,
                  };
                })
              : [''],
          };
          let data;
          try {
            data = await firestore.doc(`labels/${label.id}`).set(saveLabelInfo);
          } catch (err) {
            console.error(err);
            throw err;
          }
          console.info(data);
        })
        .catch(err => {
          console.error(err);
          throw err;
        });
    }
    return data;
  });
