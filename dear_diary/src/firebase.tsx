import {getFirestore, collection, Firestore} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyAjPrUcHdJy1nnE54lUsx_wxdzh9H7-hKI",
    authDomain: "dear-diary-emailusername-ff2b5.firebaseapp.com",
    projectId: "dear-diary-emailusername-ff2b5",
    storageBucket: "dear-diary-emailusername-ff2b5.appspot.com",
    messagingSenderId: "814943062352",
    appId: "1:814943062352:web:c31f7e493ab6dcddca4455",
    measurementId: "G-WJKP8JCQHS"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const diaryRef = collection(db, "DiaryEntries");

