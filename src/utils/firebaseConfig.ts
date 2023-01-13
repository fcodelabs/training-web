import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY as string,
  authDomain: process.env.REACT_APP_AUTHDOMAIN as string,
  projectId: process.env.REACT_APP_PROJECTID as string,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET as string,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID as string,
  appId: process.env.REACT_APP_APPID as string,
  measurementId: process.env.REACT_APP_MEASUREMENTID as string,
};

// Initialize Firebase
export const initializedapp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const colRef = collection(db, "diary_cards");
