// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMWv50btO1i7j8RbT99aDALhcBJ-HcifM",
  authDomain: "dear-diary-shangavi1996.firebaseapp.com",
  projectId: "dear-diary-shangavi1996",
  storageBucket: "dear-diary-shangavi1996.appspot.com",
  messagingSenderId: "855909101732",
  appId: "1:855909101732:web:b9401bb5c074401f523631",
  measurementId: "G-X1RY0Z7WBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);
