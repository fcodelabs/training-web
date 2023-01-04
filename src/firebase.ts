// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAHFAKZzgiuO_dQsvf7JsU7ABr7oFNdxk",
  authDomain: "dailydiary-96e2f.firebaseapp.com",
  projectId: "dailydiary-96e2f",
  storageBucket: "dailydiary-96e2f.appspot.com",
  messagingSenderId: "472799620573",
  appId: "1:472799620573:web:9379d3e893b530c1ebda34",
  measurementId: "G-S85Q3ZNDT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { db };