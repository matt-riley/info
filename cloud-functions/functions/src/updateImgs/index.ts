import * as functions from 'firebase-functions';
import * as path from 'path';
// import * as admin from 'firebase-admin';

export const updateImgs = functions.storage.object().onFinalize(async event => {
  const filePath = event.name;
  const fileName = path.basename(filePath as string).split('.')[0];
  const fileNameMatch = fileName.match(/_\d+x\d+$/);
  if (fileNameMatch && fileNameMatch.length === 0) {
    console.info('Not a resized image');
    return false;
  }
  // const firestore = admin.firestore();
  /**
   * Path is images/<artist|release|label>/<id>/<idx>/<idx>_<width>x<height>.<fileExt>
   */
  const link = event.selfLink;
  const filePathSplit = filePath?.split('/');
  console.log('HERE COME THE GIRLS');
  console.log(filePathSplit);
  console.log(link);
  return true;
});
