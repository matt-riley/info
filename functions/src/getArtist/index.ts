import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {DiscogsArtistResponse} from '../interfaces/discogsArtistResponse';
import discogsClient from '../util/discogsClient';

const firestore = admin.firestore();

export const getArtist = functions.firestore
  .document('/releases/{releaseId}')
  .onCreate(async event => {
    const data = event.data();
    if (!data) return false;

    for (const artist of data.artists) {
      console.log(artist);
      const discogsData = await discogsClient<DiscogsArtistResponse>(
        `artists/${artist.id}`,
      );

      const saveArtistInfo = {
        description: discogsData.profile ? discogsData.profile : '',
        name: discogsData.name.replace(/\(\d+\)$/, '').trim(),
        members: discogsData.members
          ? discogsData.members.map(member => {
              return {
                id: member.id,
              };
            })
          : [''],
        urls: discogsData.urls ? discogsData.urls : [''],
        images: discogsData.images ? discogsData.images : [''],
      };

      let data;
      try {
        data = await firestore.doc(`artists/${artist.id}`).set(saveArtistInfo);
      } catch (err) {
        console.error(err);
        throw err;
      }

      console.log(data);
    }
    return data;
  });
