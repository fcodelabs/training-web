
import {collection, addDoc} from "firebase/firestore";
import db from '../../Utility/firebaseConfig';

export default async function addCard(card){
    await addDoc(collection(db,"cards"),card);
    console.log(card);
}





