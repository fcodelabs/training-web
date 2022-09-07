// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6lTg7pGxvWq85fo_-JEVChrHUFkZMQBs",
  authDomain: "dear-diary-6b8fd.firebaseapp.com",
  projectId: "dear-diary-6b8fd",
  storageBucket: "dear-diary-6b8fd.appspot.com",
  messagingSenderId: "21077034715",
  appId: "1:21077034715:web:ebf2476ce43c603e9eeefe"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
// const analytics = getAnalytics(app);