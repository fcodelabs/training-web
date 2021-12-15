import {collection, addDoc, query,onSnapshot, QuerySnapshot} from "firebase/firestore";
import {store} from "../store";
import db from '../config/firebaseConfig';
import Reducer from "../Reducer";


export default function getCards(){
    const cardList = query(collection(db,"cards"));
    console.log(cardList);
    const unsubscribe = onSnapshot(cardList,(QuerySnapshot)=>{
        const cards=[];
        QuerySnapshot.forEach((doc)=>{
            cards.push(doc.data());
        });
        store.dispatch({type:"ADD_CARD",payload:cards});
    });
}