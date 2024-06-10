import { initializeApp } from "firebase/app";
import conf from "../../conf/conf"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: conf.firebaseApi,
    authDomain: `${conf.firebaseProjectId}.firebaseapp.com`,
    projectId: conf.firebaseProjectId,
    storageBucket: `${conf.firebaseProjectId}.appspot.com`,
    messagingSenderId: conf.firebaseMessageId,
    appId: conf.firebaseAppId,
};

const app = initializeApp(firebaseConfig);


export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


