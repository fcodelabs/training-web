import * as type  from '../types';
import db from '../Utils/firebaseConfig';
import {collection} from "firebase/firestore";
import store from '../store';
import { addDoc} from "firebase/firestore";

export default async function addCard(card){
    await addDoc(collection(db,"cards"),card);
    
}

    // return{
    //     type:type.ADD_CARD,
    //     payload:card,
    // }


// export const addCard = card =>({
//     type:type.ADD_CARD,
//     card,
// })