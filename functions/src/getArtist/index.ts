import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import fetch from 'node-fetch';
import { DiscogsArtistResponse } from '../interfaces/discogsArtistResponse';

const firestore = admin.firestore();

export const getArtist = functions.firestore.document('/releases/{releaseId}').onCreate(async (event) => {
  const data = event.data();
  if (!data) return false;


  for (let artist of data.artists) {
    console.log(artist);
    await fetch(`https://api.discogs.com/artists/${artist.id}?key=${functions.config().discogs.key}&secret=${functions.config().discogs.secret}`).then(res => {
      return res.json()
    }).then(async (json: DiscogsArtistResponse) => {
      console.log(json);
      const saveArtistInfo = {
        description: (json.profile) ? json.profile : '',
        name: json.name,
        members: (json.members) ? json.members.map(member => {
          return {
            id: member.id
          }
        }) : [''],
        urls: (json.urls) ? json.urls : [''],
        images: (json.images) ? json.images : [''],
      }
      let data;
      try {
        data = await firestore.doc(`artists/${artist.id}`).set(saveArtistInfo);
      }
      catch (err) {
        data = console.error(err);
      }
      console.info(data);
    }).catch(err => {
      console.error(err)
      throw Error;
    })
  }
  return data;
})
