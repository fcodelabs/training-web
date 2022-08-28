import { initializeApp } from "firebase/app"; // eslint-disable-line
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSuwPtm7mndvchiVmhz3DJ-l9vpsuzt9Q",
  authDomain: "dear-diary-anushka.firebaseapp.com",
  projectId: "dear-diary-anushka",
  storageBucket: "dear-diary-anushka.appspot.com",
  messagingSenderId: "635350987112",
  appId: "1:635350987112:web:647a5562e8a15092bae6dd",
  measurementId: "G-1HTS0F2Z6H",
};

const app = initializeApp(firebaseConfig); // eslint-disable-line
const db = getFirestore(app);

export default db;
