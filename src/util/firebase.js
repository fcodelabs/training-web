import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqv2ZNbhEUroBpNJcrP33D-XyjZRQ_he0",
  authDomain: "dear-diary-lochana.firebaseapp.com",
  projectId: "dear-diary-lochana",
  storageBucket: "dear-diary-lochana.appspot.com",
  messagingSenderId: "1006178395903",
  appId: "1:1006178395903:web:1b67a3713d99af7aed0eca",
  measurementId: "G-0FLMLVMKPH",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
