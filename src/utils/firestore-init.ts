// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcYXu405PSXQmV8GJFnK0g4C13M9uKDFk",
  authDomain: "dear-diary-2b9ea.firebaseapp.com",
  projectId: "dear-diary-2b9ea",
  storageBucket: "dear-diary-2b9ea.appspot.com",
  messagingSenderId: "1089250669169",
  appId: "1:1089250669169:web:a3f0835a1275bb68ee61d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
