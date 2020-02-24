import axios from 'axios';
import * as fs from 'fs';
import * as functions from 'firebase-functions';
import * as os from 'os';
import * as path from 'path';
import * as url from 'url';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {Storage, UploadResponse} from '@google-cloud/storage';
import {CollectionArtistData} from '../interfaces/CollectionArtistData';
import {CollectionLabelData} from '../interfaces/CollectionLabelData';
import {CollectionReleaseData} from '../interfaces/CollectionReleaseData';

const storage = new Storage();
const TMP_BUCKET: string | undefined = process.env.TMP_BUCKET;

export const saveImgToTempDir = async (
  type: 'ARTIST' | 'RELEASE' | 'LABEL',
  fileUrl: string,
  id: string | number,
): Promise<UploadResponse> => {
  const parsedUrl = url.parse(fileUrl);
  const fileName = path.basename(parsedUrl.pathname as string);
  const tmpPath = path.join(os.tmpdir(), type.toLowerCase(), fileName);
  const writer = fs.createWriteStream(tmpPath);
  const imgDL = await axios({
    url: fileUrl,
    method: 'GET',
    responseType: 'stream',
  });

  imgDL.data.pipe(writer);
  new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });

  const uploadFilePath = await storage
    .bucket(TMP_BUCKET as string)
    .upload(tmpPath, {
      gzip: false,
      destination: `images/${type.toLowerCase()}/${id}/${fileName}`,
    });
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
  for (const img of data.images) {
    const fileUrl = img.resource_url;
    const tmpFileResult = await saveImgToTempDir(type, fileUrl, data.id);
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
