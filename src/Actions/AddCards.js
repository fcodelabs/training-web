import { collection, addDoc } from "firebase/firestore"; 
import db from "../Config/firestoreConfig";

export default async function AddCards(card){
    // Add a new document in collection "cities"
    await addDoc(collection(db, "posts"), card);
}