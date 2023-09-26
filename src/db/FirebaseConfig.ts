import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkl-x5teosuyzZ_7VN7-Ub--CebQiOmgc",
  authDomain: "dear-diary-nimesh.firebaseapp.com",
  databaseURL: "https://dear-diary-nimesh-default-rtdb.firebaseio.com",
  projectId: "dear-diary-nimesh",
  storageBucket: "dear-diary-nimesh.appspot.com",
  messagingSenderId: "270440134879",
  appId: "1:270440134879:web:845a7d3cd8e979044f116a",
  measurementId: "G-9QRBF3DH2T",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
