import { CardTravelSharp, Store } from "@material-ui/icons";
import {collection, addDoc} from "firebase/firestore";
import db from '../config/firebaseConfig';

export default async function addCard(card){
    await addDoc(collection(db,"cards"),card);
    
}





