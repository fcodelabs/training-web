import { take, put, takeLatest, all, call } from 'redux-saga/effects';
import firebase from '../config'
import { eventChannel } from 'redux-saga'
import {REDUX_SAGA_ADD_CARD,REDUX_SAGA_GET_CARDS,GET_CARDS}  from "./DiaryType"

function watchForCardsChannel(){
    return eventChannel(emit => {
        firebase.firestore().collection("cards")
        .onSnapshot((querySnapshot) => {
            let cards = [];
            querySnapshot.forEach((doc) => {
                cards.push(doc.data());
            });
           emit(cards)
        });
        const unsubscribe = () => {
          }
          return unsubscribe
      });
}

function* watchForCards() {
    const channel = yield call(watchForCardsChannel);
    while (true){
        try{
            const result = yield take(channel);
            yield put({type:GET_CARDS,payload:result})
            console.error('Success:', err)
        }
        catch(err){
            console.error('Error:', err)
        }
    } 
  }

function* cardsWatcher() {
     yield takeLatest(REDUX_SAGA_GET_CARDS, watchForCards)
}

function* addCard() {
    yield takeLatest(REDUX_SAGA_ADD_CARD, (action)=>addCardtoFirebase(action))
}

function addCardtoFirebase(action){
    console.log("AddCard",action)
    firebase.firestore().collection("cards")
        .add(action.payload)
}

export default function* rootSaga() {
   yield all([
    cardsWatcher(), addCard()
   ]);
}