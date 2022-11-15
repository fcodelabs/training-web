import { take,call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import { setCards ,getCards, addCard} from './DiaryHomeSlice'
import { db } from '../../utils/firebaseConfig';
import { setDoc, collection, getDocs, doc, onSnapshot } from 'firebase/firestore';

function* handleGetCards() {

   const channel = eventChannel((emit)=>onSnapshot(collection(db, "Post"),emit))
    while (true){
        try{
            const data = yield take(channel);
            const cards = data.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
            
            yield put(setCards(cards))
        }
        catch(err){
            console.error('socket error:', err)
        }
    } 
    

}

function* handleAddCard(action) {
   yield call(() => setDoc(doc(db,"Post",action.payload.id),action.payload.card));
}

export function* DiaryHomeSaga() {
    yield takeEvery(getCards.type, handleGetCards);
    yield takeEvery(addCard.type, handleAddCard);
} 