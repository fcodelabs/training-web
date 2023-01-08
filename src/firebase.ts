// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtqtr8pOA26G0ElhqeJLm9opaY3H_5x8M",
  authDomain: "dear-diary-piyumi.firebaseapp.com",
  projectId: "dear-diary-piyumi",
  storageBucket: "dear-diary-piyumi.appspot.com",
  messagingSenderId: "519479135871",
  appId: "1:519479135871:web:a32d0825940d1dac35394a",
  measurementId: "G-P6F5D4MQ75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};