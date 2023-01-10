import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqteS4xZgYfRcWf7MYlCpe_fdWUdqTSQQ",
  authDomain: "dear-diary-yasithh.firebaseapp.com",
  projectId: "dear-diary-yasithh",
  storageBucket: "dear-diary-yasithh.appspot.com",
  messagingSenderId: "408096567648",
  appId: "1:408096567648:web:36df947d970eb8cc45ee05",
  measurementId: "G-4FMWE5WZMJ",
};

// Initialize Firebase
export const initializedapp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const colRef = collection(db, "diary_cards");
