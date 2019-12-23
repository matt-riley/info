import * as functions from 'firebase-functions';
// import fetch from 'node-fetch';
import axios from 'axios';

async function discogsClient<T>(path: string): Promise<T> {
  let response: T;
  try {
    const {data} = await axios.get(
      `https://api.discogs.com/${path}?key=${
        functions.config().discogs.key
      }&secret=${functions.config().discogs.secret}`,
    );

    response = data;
  } catch (err) {
    console.error(err);
    throw err;
  }
  return response;
}

export default discogsClient;
