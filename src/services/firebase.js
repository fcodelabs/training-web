import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCnr49qpDAsceIRxJZyaFy541XlkBtJ-BE",
    authDomain: "dear-diary-owin.firebaseapp.com",
    projectId: "dear-diary-owin",
    storageBucket: "dear-diary-owin.appspot.com",
    messagingSenderId: "153084663025",
    appId: "1:153084663025:web:080e7f7abc4b32fbf24550",
    measurementId: "G-SY7T3KJC77",
};

export const app = initializeApp(firebaseConfig);
