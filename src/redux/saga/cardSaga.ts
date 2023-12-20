import { takeEvery, put, call } from 'redux-saga/effects';
import { getFirestore, collection, getDocs, DocumentSnapshot, DocumentData } from 'firebase/firestore';
import { setCards } from '../reducers/cardReducer';


interface Card {
id: string;
title: string;
description: string;
}


function* fetchCardsSaga(): Generator<any, void, any> {
const firestore = getFirestore();
const cardsCollection = collection(firestore, 'Cards');


try {
const querySnapshot = yield call(getDocs, cardsCollection);
const cards: Card[] = [];


querySnapshot.forEach((doc: DocumentSnapshot<DocumentData>) => {
const cardData = doc.data();
const card: Card = {
id: doc.id,
title: cardData?.title || '',
description: cardData?.description || '',
};
cards.push(card);
});


yield put(setCards(cards));
} catch (error) {
console.error('Error fetching cards:', error);
}
}


function* cardSaga() {
yield takeEvery('cards/fetchCards', fetchCardsSaga);
}


export default cardSaga;





