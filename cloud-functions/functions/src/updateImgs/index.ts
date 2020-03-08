import * as functions from 'firebase-functions';
import * as path from 'path';
// import * as admin from 'firebase-admin';

export const updateImgs = functions.storage
  .bucket(functions.config().img.prod)
  .object()
  .onFinalize(async event => {
    const filePath = event.name;
    const fileName = path.basename(filePath as string).split('.')[0];
    const fileNameMatch = fileName.match(/_\d+x\d+$/);
    if (fileNameMatch === null) {
      console.info('Not a resized image');
      return false;
    }
    // const firestore = admin.firestore();
    /**
     * Path is images/<artist|release|label>/<id>/<idx>/<idx>_<width>x<height>.<fileExt>
     */
    const link = event.selfLink;
    const filePathSplit: string[] = filePath?.split('/') as string[];
    const type = filePathSplit[1];
    console.log(filePathSplit);
    console.log(link);
    console.log(type);
    return true;
  });
