import { takeEvery, put, call, fork, take, cancelled, cancel } from 'redux-saga/effects';
import { collection, onSnapshot, QuerySnapshot, DocumentSnapshot, DocumentData, serverTimestamp, addDoc } from 'firebase/firestore';
import { eventChannel, EventChannel } from 'redux-saga';
import { addCardSuccess, addCardFailure } from '../reducers/cardReducer';
import { setCards } from '../reducers/cardReducer';
import { db } from '../../firebase';

interface Card {
  id: string;
  title: string;
  description: string;
  username: string | null;
  timestamp: Date | null;
}

function createCardsChannel(cardsCollection: any) {
  return eventChannel<Card[]>((emit) => {
    const unsubscribe = onSnapshot(cardsCollection, (querySnapshot: QuerySnapshot<DocumentData>) => {
      const cards: Card[] = [];

      querySnapshot.forEach((doc: DocumentSnapshot<DocumentData>) => {
        const cardData = doc.data();
        const card: Card = {
          id: doc.id,
          title: cardData?.title || '',
          description: cardData?.description || '',
          username: cardData?.username || '',
          timestamp: cardData?.timeStamp?.toDate() as Date | null,
        };
        cards.push(card);
      });

      emit(cards);
    });

    return () => unsubscribe();
  });
}

function* watchCardsChanges(cardsChannel: EventChannel<Card[]>): Generator<any, void, any> {
  try {
    while (true) {
      const cards = yield take(cardsChannel);
      yield put(setCards(cards));
    }
  } finally {
    if (yield cancelled()) {
      cardsChannel.close();
    }
  }
}

function* fetchCardsSaga(): Generator<any, void, any> {
  let watcher;
  try {

    const cardsCollection = collection(db, 'Cards');

    const cardsChannel = yield call(createCardsChannel, cardsCollection);

    watcher = yield fork(watchCardsChanges, cardsChannel);

    yield take('FETCH_CARDS_REQUEST');

  } finally {

    // Cancel the watcher saga if it was forked
    if (watcher) {
      yield cancel(watcher);
    }

  }
}

function* addCardSaga(action: any): Generator<any, void, any> {
  try {
    const { title, description, username } = action.payload;

    const res = yield call(addDoc, collection(db, 'Cards'), {
      title,
      description,
      username,
      timeStamp: serverTimestamp(),
    });

    if (res) {
      const newCard = {
        id: res.id,
        title,
        description,
        username,
        timestamp: new Date(),
      };
      yield put(addCardSuccess(newCard));
    }
  } catch (error) {
    yield put(addCardFailure('An error occurred while adding the card.'));
  }
}

export function* cardSaga() {
  yield takeEvery('FETCH_CARDS_REQUEST', fetchCardsSaga);
  yield takeEvery('ADD_CARD_REQUEST', addCardSaga);
}

export default cardSaga;