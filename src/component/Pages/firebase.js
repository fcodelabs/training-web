// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq6K3h2uJ-3r55GwJR_AwiCC7z9zLFIrc",
  authDomain: "dear-diary-91b1f.firebaseapp.com",
  projectId: "dear-diary-91b1f",
  storageBucket: "dear-diary-91b1f.appspot.com",
  messagingSenderId: "353102795527",
  appId: "1:353102795527:web:c09639d938a0ee505deba2",
  measurementId: "G-P9Q6B4PYDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);