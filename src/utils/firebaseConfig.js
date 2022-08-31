import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN6aawOzWRbspjGWzyLQfVWkBBUtDGR24",
  authDomain: "dear-diary-udara.firebaseapp.com",
  projectId: "dear-diary-udara",
  storageBucket: "dear-diary-udara.appspot.com",
  messagingSenderId: "716836787522",
  appId: "1:716836787522:web:ccd51332a29b88a52164db",
  measurementId: "G-DE390GE3TR",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
const todoCom = collection(db, "TodoList");
export default todoCom;
