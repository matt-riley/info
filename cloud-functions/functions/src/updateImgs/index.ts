import * as functions from 'firebase-functions';
import * as path from 'path';
import * as admin from 'firebase-admin';
import {Storage} from '@google-cloud/storage';

admin.initializeApp(
  {
    credential: admin.credential.applicationDefault(),
  },
  'updateImgs',
);

export const updateImgs = functions.storage
  .bucket(functions.config().img.prod)
  .object()
  .onFinalize(async event => {
    const filePath = event.name;
    const fileName = path.basename(filePath as string).split('.')[0];
    const fileNameMatch = fileName.match(/\d+x\d+$/);
    if (fileNameMatch === null) {
      console.info('Not a resized image');
      return false;
    }
    const link = event.selfLink;
    const filePathSplit: string[] = filePath?.split('/') as string[];
    const type = filePathSplit[1];
    const id = filePathSplit[2];
    const idx = parseInt(filePathSplit[3]);
    const storage = new Storage();
    const [files] = await storage.bucket(event.bucket).getFiles({
      prefix: `/images/${type}s/${id}/${idx}/`,
      delimiter: '/',
    });

    console.log(files);

    if (files.length < 4) {
      console.log(`Not finished processing ${type} ${id} ${idx} imgs yet`);
      return false;
    }

    // const updates = files.reduce((acc, curr) => {
    //   curr
    // }, {});
    const firestore = admin.firestore();

    /**
     * Path is images/<artist|release|label>/<id>/<idx>/<idx>_<width>x<height>.<fileExt>
     */

    const imgSize = fileNameMatch[0];
    const currentRef = firestore.collection(`${type}s`).doc(id);
    await firestore.runTransaction(async t => {
      try {
        const doc = await t.get(currentRef);
        const currentData = doc.data();
        if (currentData) {
          const currentImgs = currentData.images || [];
          const currentImg = currentImgs[idx];
          currentImg[imgSize] = {
            url: link,
          };
          currentImgs[idx] = {
            ...currentImg,
          };
          t.update(currentRef, {
            images: currentImgs,
          });
          console.log(`Image ${type} ${id} ${idx} ${imgSize} Updated`);
        }
      } catch (err) {
        console.error(err);
      }
    });
    return true;
  });
