import {call, put, takeEvery} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {cardsActions} from './store';
import app from "../config/firebase"
import { getFirestore, collection, addDoc} from 'firebase/firestore';

//intrerface of card Data
interface CardData {
    id:string
    user: string;
    title: string;
    description: string;
}

//add new card into the database
function* addCards(action: PayloadAction<CardData>) {
    const { id, user, title, description } = action.payload;
    yield put(cardsActions.addCard(action.payload)); 
    const db = getFirestore(app);
    const collectionRef = collection(db, 'cards');
    const currentTime = new Date();
    console.log(currentTime.toISOString());
    const timeFormatted = currentTime.toISOString()
  
    try {
      yield call(addDoc, collectionRef, { id, user, title, description, timeFormatted});
    } catch (error) {
      console.error('Error adding document: ', error);
    }
}

function* addCardSaga(){
    yield takeEvery("cards/saveCard", addCards)
}

export {addCardSaga};
