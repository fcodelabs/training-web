import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY!,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN!,
  databaseURL: process.env.REACT_APP_DATABASE_URL!,
  projectId: process.env.REACT_APP_PROJECT_ID!,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET!,
  messagingSenderId: process.env.REACT_APP_MESSENGING_SENDER_ID!,
  appId: process.env.REACT_APP_ID!,
};

alert(firebaseConfig.apiKey);

export default getFirestore(initializeApp(firebaseConfig));
