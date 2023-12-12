import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBFpbCPxTjwDx-AFolWCD73sYOKXfSqT0",
  authDomain: "dear-diary-emailusername-24b75.firebaseapp.com",
  projectId: "dear-diary-emailusername-24b75",
  storageBucket: "dear-diary-emailusername-24b75.appspot.com",
  messagingSenderId: "371728179698",
  appId: "1:371728179698:web:b1c5afbb0fc891431b0b6b",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export const collectionRef = collection(firestore, "cards");


export const addCards = async (title: string, description: string) => {
  try {
    await addDoc(collectionRef, { title: title, description: description });
  } catch (error) {
    console.error(error);
  }
};
