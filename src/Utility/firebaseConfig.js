
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD4MdAtd--eQD0K7S2GC7vODDAuo2r-ZRw",
  authDomain: "dear-diary-adeesha.firebaseapp.com",
  projectId: "dear-diary-adeesha",
  storageBucket: "dear-diary-adeesha.appspot.com",
  messagingSenderId: "781784565138",
  appId: "1:781784565138:web:5f1c3001b40445a0416d4b",
  measurementId: "G-9839TCZTVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default db ;