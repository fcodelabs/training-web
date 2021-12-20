
import db from '../Utils/firebaseConfig';
import {collection, query,onSnapshot, QuerySnapshot} from "firebase/firestore";
import store from '../store';

function* getCardSaga() {
    const cardList = query(collection(db,"cards"));
    console.log(cardList);
    const unsubscribe = onSnapshot(cardList,(QuerySnapshot)=>{
        const cards=[];
        QuerySnapshot.forEach((doc)=>{
            cards.push(doc.data());
            
        });
        
        return store.dispatch({type:"GET_CARDS_REQUESTED",payload:cards});
        
         
    });
    
  }


 
 export default getCardSaga;