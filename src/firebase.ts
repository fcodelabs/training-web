import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore';

 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dear-diary-emailusername-5f60d.firebaseapp.com",
  projectId: "dear-diary-emailusername-5f60d",
  storageBucket: "dear-diary-emailusername-5f60d.appspot.com",
  messagingSenderId: "71014166140",
  appId: process.env.REACT_APP_API_KEY,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
