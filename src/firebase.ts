import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore';

 
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_API_KEY,
  authDomain: "dear-diary-emailusername-5f60d.firebaseapp.com",
  projectId: "dear-diary-emailusername-5f60d",
  storageBucket: "dear-diary-emailusername-5f60d.appspot.com",
  messagingSenderId: "71014166140",
  appId: "1:71014166140:web:fbe2e46b2a929925ed23f9"
  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
