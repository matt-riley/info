import admin from "firebase-admin";

const serviceAccount = {
  client_email: process.env.FIRESTORE_CLIENT_EMAIL,
  private_key: process.env.FIRESTORE_PRIVATE_KEY,
  project_id: process.env.FIRESTORE_PROJECT_ID,
};

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key,
    projectId: serviceAccount.project_id,
  }),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
});

export default admin;
