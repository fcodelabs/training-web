import { takeLatest } from 'redux-saga/effects';
import  { addCardByUser }  from './diaryCardSlice';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../config/firebaseIntegration';
import { PayloadAction } from '@reduxjs/toolkit';
import {SubmitCard} from './diaryCardSlice';


function* addCardSaga(action:PayloadAction<SubmitCard > ) {
    const card = action.payload;
    const cardsCol = collection(db, 'diary-cards');
    yield addDoc(cardsCol, card);
}


function* Gen() {
    yield takeLatest(addCardByUser, addCardSaga);

}

export default Gen;
