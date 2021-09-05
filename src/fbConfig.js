import { initializeApp } from "firebase/app";
import { getDatabase  } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDPuPhXzbf2qMsodbcaUvRzdkuUIiJxN4I",
  authDomain: "dear-diary-binith.firebaseapp.com",
  databaseURL: "https://dear-diary-binith-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dear-diary-binith",
  storageBucket: "dear-diary-binith.appspot.com",
  messagingSenderId: "305941266434",
  appId: "1:305941266434:web:16490fcdc6e5f6a7aa671b"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getDatabase();