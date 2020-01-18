import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {DiscogsLabelResponse} from '../interfaces/discogsLabelResponse';
import discogsClient from '../util/discogsClient';

const firestore = admin.firestore();

export const getLabel = functions.firestore
  .document('/releases/{releaseId}')
  .onCreate(async event => {
    const data = event.data();
    if (!data) return false;

    for (const label of data.labels) {
      console.log(label);
      const discogsData = await discogsClient<DiscogsLabelResponse>(
        `labels/${label.id}`,
      );
      const saveLabelInfo = {
        id: label.id,
        description: discogsData.profile ? discogsData.profile : '',
        name: discogsData.name.replace(/\(\d+\)$/, '').trim(),
        contactInfo: discogsData.contact_info ? discogsData.contact_info : '',
        images: discogsData.images ? discogsData.images : [''],
        urls: discogsData.urls ? discogsData.urls : [''],
        sublabels: discogsData.sublabels
          ? discogsData.sublabels.map(sublabel => {
              return {
                id: sublabel.id,
              };
            })
          : [''],
      };

      let data;
      try {
        data = await firestore.doc(`labels/${label.id}`).set(saveLabelInfo);
      } catch (error) {
        console.error(error);
        throw error;
      }

      console.info(data);
    }
    return data;
  });
