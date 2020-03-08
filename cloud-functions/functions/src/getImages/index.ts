import axios from 'axios';
import * as functions from 'firebase-functions';
import * as path from 'path';
import * as url from 'url';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {Storage} from '@google-cloud/storage';
import {CollectionArtistData} from '../interfaces/CollectionArtistData';
import {CollectionLabelData} from '../interfaces/CollectionLabelData';
import {CollectionReleaseData} from '../interfaces/CollectionReleaseData';

const storage = new Storage();
const BUCKET: string = functions.config().img.prod;

export const saveImgToTempDir = async (
  type: 'ARTIST' | 'RELEASE' | 'LABEL',
  fileUrl: string,
  id: string | number,
  index: number,
): Promise<string> => {
  const parsedUrl = url.parse(fileUrl);
  const fileName = path.basename(parsedUrl.pathname as string);
  const extension = path.extname(fileName);
  const uploadFilePath = `images/${type.toLowerCase()}/${id}/${index}/${index}${extension}`;
  const writer = storage
    .bucket(BUCKET)
    .file(uploadFilePath)
    .createWriteStream({
      gzip: false,
      contentType: 'auto',
    });
  const imgDL = await axios.get(fileUrl, {
    responseType: 'stream',
  });
  imgDL.data.pipe(writer);
  new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
  console.info(uploadFilePath);
  return uploadFilePath;
};

export async function getImgs(
  event: DocumentSnapshot,
  type: 'ARTIST' | 'LABEL' | 'RELEASE',
): Promise<boolean> {
  const data = event.data() as
    | CollectionArtistData
    | CollectionLabelData
    | CollectionReleaseData;
  if (!data) return false;
  for (const [idx, img] of data.images.entries()) {
    const fileUrl = img.resource_url;
    const tmpFileResult = await saveImgToTempDir(type, fileUrl, data.id, idx);
    console.log(JSON.stringify(tmpFileResult));
  }
  return true;
}

export const getReleaseImgs = functions.firestore
  .document('/releases/{releaseId}')
  .onCreate(async event => {
    const imgs = getImgs(event, 'RELEASE');
    return imgs;
  });

export const getArtistImgs = functions.firestore
  .document('/artists/{artistId}')
  .onCreate(async event => {
    const imgs = getImgs(event, 'ARTIST');
    return imgs;
  });

export const getLabelImgs = functions.firestore
  .document('/labels/{labelId}')
  .onCreate(async event => {
    const imgs = getImgs(event, 'LABEL');
    return imgs;
  });
