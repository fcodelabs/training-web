import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore';

 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_KEY,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
