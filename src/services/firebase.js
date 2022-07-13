import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

export const firebaseConfig = {
    apiKey: "AIzaSyCnr49qpDAsceIRxJZyaFy541XlkBtJ-BE",
    authDomain: "dear-diary-owin.firebaseapp.com",
    projectId: "dear-diary-owin",
    storageBucket: "dear-diary-owin.appspot.com",
    messagingSenderId: "153084663025",
    appId: "1:153084663025:web:080e7f7abc4b32fbf24550",
    measurementId: "G-SY7T3KJC77",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
