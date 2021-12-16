import { call, put, takeEvery } from 'redux-saga/effects';
import db from '../../Utils/firebaseConfig';
import {collection, query,onSnapshot, QuerySnapshot} from "firebase/firestore";
import store from '../../store';

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

//   function* fetchCards(action) {
//     try {
//        const cards = yield call(getDocuments);
//        yield put({type: 'GET_CARDS_SUCCESS', cards: cards});
//     } catch (e) {
//        yield put({type: 'GET_CARDS_FAILED', message: e.message});
//     }
//  }
 
//  function* getCardSaga() {
//     yield takeEvery('GET_CARDS_REQUESTED', fetchCards);
//  }
 
 export default getCardSaga;