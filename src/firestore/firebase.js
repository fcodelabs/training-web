import { initializeApp } from "firebase/app";
import {getFirestore, collection} from '@firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.React_App_apiKey,
  authDomain: process.env.React_App_authDomain,
  projectId: process.env.React_App_projectId,
  storageBucket: process.env.React_App_storageBucket,
  messagingSenderId: process.env.React_App_messagingSenderId,
  appId: process.env.React_App_appId
};


initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const doc= collection(firestore,"messages")

//export default firestore;