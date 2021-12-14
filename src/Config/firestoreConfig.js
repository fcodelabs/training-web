import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwk0ycYrBUj4XZBXzptnvObmVHhExGByE",
    authDomain: "dear-diary-thushan-34d4d.firebaseapp.com",
    projectId: "dear-diary-thushan-34d4d",
    storageBucket: "dear-diary-thushan-34d4d.appspot.com",
    messagingSenderId: "306844007215",
    appId: "1:306844007215:web:f551cb9dde346c0c3e7fda",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
