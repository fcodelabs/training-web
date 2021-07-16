import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkwP4cY42oz60nB7C-2azw-KbO2qUYXao",
  authDomain: "dear-diary-duminduyasas42.firebaseapp.com",
  projectId: "dear-diary-duminduyasas42",
  storageBucket: "dear-diary-duminduyasas42.appspot.com",
  messagingSenderId: "494874942724",
  appId: "1:494874942724:web:cc164064daa7c70712c451",
};

firebase.initializeApp(firebaseConfig);

export const collection = firebase.firestore().collection("/Users");
export const db = firebase.firestore();
