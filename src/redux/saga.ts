import {call, put, takeEvery, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import {cardsActions} from './cards/cardSlice';
import app from "../config/firebase"
import { getFirestore, collection, addDoc, Firestore, onSnapshot, orderBy,query} from 'firebase/firestore';

//intrerface of card Data
interface CardData {
    id:string
    user: string;
    title: string;
    description: string;
}

//listen realtime changes in db
function snapShotChannel(db: Firestore) {
  return eventChannel<CardData[]>(emitter => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'cards'), orderBy('timeFormatted')),
      snapShot => {
        const cardsDocs = snapShot.docs.map(doc => {
          const { id, user, title, description } = doc.data();
          return { id, user, title, description } as CardData;
        });
        emitter(cardsDocs);
      }
    );
    return unsubscribe;
  });
}

//update cards
function* fetchCards(): Generator<any, any, any> {
  const db: Firestore = getFirestore(app);
  const channel = yield call(snapShotChannel, db);
  try {
    while (true) {
      const cards: CardData[] = yield take(channel);
      yield put(cardsActions.getCards(cards));
      console.log("working")
    }
  } finally {
  }
}

//add new card into the database
function* addCards(action: PayloadAction<CardData>) {
  const { id, user, title, description } = action.payload;
  yield put(cardsActions.addCard(action.payload)); 
  const db = getFirestore(app);
  const collectionRef = collection(db, 'cards');
  const currentTime = new Date();
  const timeFormatted = currentTime.toISOString()

  try {
    yield call(addDoc, collectionRef, { id, user, title, description, timeFormatted});
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

function* addCardSaga(){
    yield takeEvery(cardsActions.saveCard, addCards)
}

function* fetchCardSaga(){
  yield takeEvery(cardsActions.requestCards, fetchCards)
}

export {addCardSaga, fetchCardSaga};
