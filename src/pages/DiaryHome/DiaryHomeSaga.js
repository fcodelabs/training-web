import { take, call, put, takeLatest } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { setCards, getCards, addCard } from './DiaryHomeSlice'
import { db } from '../../utils/firebaseConfig';
import { addDoc, collection, onSnapshot, query, orderBy } from 'firebase/firestore';

function* handleGetCards() {

    const ref = query(collection(db, "Post"), orderBy('created'));
    const channel = eventChannel((emit) => onSnapshot(ref, emit));
    
    while (true) {
        try {
            const data = yield take(channel);
            const cards = data.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            yield put(setCards(cards))
        }
        catch (err) {
            console.error('socket error:', err)
        }
    }


}

function* handleAddCard(action) {
    yield call(() => addDoc(collection(db, "Post"), action.payload.card));
}

export function* DiaryHomeSaga() {
    yield takeLatest(getCards, handleGetCards);
    yield takeLatest(addCard, handleAddCard);
} 