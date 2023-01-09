// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-4d5-Wc9ztc3kp35SWPIRQ1THLYCv2e8",
  authDomain: "dear-diary-jalitha.firebaseapp.com",
  projectId: "dear-diary-jalitha",
  storageBucket: "dear-diary-jalitha.appspot.com",
  messagingSenderId: "701466853866",
  appId: "1:701466853866:web:76c16c301fad3346297293"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};