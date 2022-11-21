import { take, call, put, takeEvery } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { getCards,getCardsFailed,getCardsSuccess, addCard ,addCardFailed} from './DiaryHomeSlice'
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

            yield put(getCardsSuccess(cards))
        }
        catch (err) {
            yield put(getCardsFailed(err));
        }
    }


}

function* handleAddCard(action) {
    try {
        yield call(() => addDoc(collection(db, "Post"), action.payload.card));
    } catch (error) {
        yield put(addCardFailed(error));
    }
    
}

export function* DiaryHomeSaga() {
    yield takeEvery(getCards, handleGetCards);
    yield takeEvery(addCard, handleAddCard);
} 