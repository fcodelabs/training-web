import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import  { fetchCards, addCardByUser }  from '../slices/diaryCardSlice';
import { addCards } from '../slices/diaryCardSlice';
import { collection, getDocs, QuerySnapshot, addDoc } from 'firebase/firestore';
import db from '../../utilities/firebaseIntegration';
import { PayloadAction } from '@reduxjs/toolkit';

type Card = {
    id:string
    title: string;
    body: string;
};

type SubmitCard = {
    title: string;
    body: string;
};
function* fetchCardSaga() {
    const cardsCol = collection(db, 'diary-cards');
    const cardsSnapshot : QuerySnapshot =  yield getDocs(cardsCol);
    const cardsList : Card[]= cardsSnapshot.docs.map(doc => {
        const cardData = doc.data() as Card;
        cardData.id = doc.id;
        return cardData;
    });
    yield put(addCards(cardsList));
}

function* addCardSaga(action:PayloadAction<SubmitCard> ) {
    const card = action.payload;
    const cardsCol = collection(db, 'diary-cards');
    yield addDoc(cardsCol, card);
}


function* Gen() {
    yield takeEvery(fetchCards.pending, fetchCardSaga);
    yield takeLatest(addCardByUser, addCardSaga);
    

}

export default Gen;
