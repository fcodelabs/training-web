
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyClh-H48lvMQ2WJx03T-zGQiC3N_Xr4kNw",
  authDomain: "dear-diary-lahiru.firebaseapp.com",
  //  databaseURL: "https://dear-diary-lahiru-default-rtdb.firebaseio.com/",
  projectId: "dear-diary-lahiru",
  storageBucket: "dear-diary-lahiru.appspot.com",
  messagingSenderId: "461281283767",
  appId: "1:461281283767:web:9a24cacca5317ff7718732",
  measurementId: "G-TMQYRPNK1P",
  // apiKey: "AIzaSyAlbry9iuCZLHAHbtDlpSE6BpM8jX2jRyw",
  // authDomain: "dear-diary-piyumal.firebaseapp.com",
  // projectId: "dear-diary-piyumal",
  // storageBucket: "dear-diary-piyumal.appspot.com",
  // messagingSenderId: "252518679094",
  // appId: "1:252518679094:web:3ccd1a7666c8a28bf68e97",
  // measurementId: "G-HEHD3N1334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// apiKey: "AIzaSyClh-H48lvMQ2WJx03T-zGQiC3N_Xr4kNw",
// authDomain: "dear-diary-lahiru.firebaseapp.com",
// databaseURL: "https://dear-diary-lahiru-default-rtdb.firebaseio.com",
// projectId: "dear-diary-lahiru",
// storageBucket: "dear-diary-lahiru.appspot.com",
// messagingSenderId: "461281283767",
// appId: "1:461281283767:web:8b702781ccdeecde718732",
// measurementId: "G-QNZZ087CCH"