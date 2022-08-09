import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkjWmLpMvAyxgTRZThSXxuO52CrgfR5OE",
  authDomain: "dear-diary-gayal.firebaseapp.com",
  projectId: "dear-diary-gayal",
  storageBucket: "dear-diary-gayal.appspot.com",
  messagingSenderId: "295226046453",
  appId: "1:295226046453:web:1655d85c26d94242b752bc"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;