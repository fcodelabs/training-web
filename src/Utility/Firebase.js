import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVmxJdgeRc8OUjuMnSViCI653NhjeURCg",
    authDomain: "dear-diary-akash.firebaseapp.com",
    databaseURL: "https://dear-diary-akash-default-rtdb.firebaseio.com",
    projectId: "dear-diary-akash",
    storageBucket: "dear-diary-akash.appspot.com",
    messagingSenderId: "584663456397",
    appId: "1:584663456397:web:799b22fd947733bea2e0c4",
    measurementId: "G-EGRJB7XBN3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const collection = firebase.firestore().collection("/Users");
  export const db=firebase.firestore();
  