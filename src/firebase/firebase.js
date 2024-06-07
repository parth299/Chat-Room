import { initializeApp } from "firebase/app";
import conf from "../../conf/conf"

const firebaseConfig = {
    apiKey: conf.firebaseApi,
    authDomain: `${conf.firebaseProjectId}.firebaseapp.com`,
    databaseURL: conf.firebaseDatabaseUrl,
    projectId: conf.firebaseProjectId,
    storageBucket: `${conf.firebaseProjectId}.appspot.com`,
    messagingSenderId: conf.firebaseMessageId,
    appId: conf.firebaseAppId,
};

const app = initializeApp(firebaseConfig);

export default app;



