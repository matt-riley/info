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
      const currentArtistRecord = await firestore
        .doc(`artists/${artist.id}`)
        .get();
      const currentData = currentArtistRecord.data();
      if (currentData) {
        const existingReleases = currentData.releases || [];
        const existingGenres: string[] = currentData.genres || [];
        const newGenres = data.genres.filter(
          (genre: string) => !existingGenres.includes(genre),
        );

        firestore.doc(`artists/${artist.id}`).update({
          releases: [...existingReleases, data.id],
          genres: existingGenres.concat(newGenres),
        });
        continue;
      }

      const discogsData = await discogsClient<DiscogsArtistResponse>(
        `artists/${artist.id}`,
      );

      const saveArtistInfo = {
        id: artist.id,
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
        genres: data.genres,
        releases: [data.id],
      };

      let writeData;
      try {
        writeData = await firestore
          .doc(`artists/${artist.id}`)
          .set(saveArtistInfo);
      } catch (err) {
        console.error(err);
        throw err;
      }
      console.log(writeData);
      continue;
    }
    return data;
  });
