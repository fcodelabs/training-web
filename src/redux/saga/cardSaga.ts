import { takeEvery, put, call, fork, take, cancelled, cancel } from 'redux-saga/effects';
import { collection, onSnapshot, QuerySnapshot, DocumentSnapshot, DocumentData, serverTimestamp, addDoc } from 'firebase/firestore';
import { eventChannel, EventChannel } from 'redux-saga';
import { setCards } from '../reducers/cardReducer';
import { db } from '../../firebase';

interface ICard {
  id?: string; 
  title: string;
  description: string;
  username: string | null;
  timestamp: Date | null;
}
export const addCardRequest = (title: string, description: string, username: string | null) => ({
  type: 'cards/addCardRequest',
  payload: { title, description, username: username || '' },
});

export const fetchCardsRequest = (cards: ICard[]) => ({
  type: 'cards/fetchCardsRequest',
  payload: cards,
});

function createCardsChannel(cardsCollection: any) {
  return eventChannel<ICard[]>((emit) => {
    const unsubscribe = onSnapshot(cardsCollection, (querySnapshot: QuerySnapshot<DocumentData>) => {
      const cards: ICard[] = [];

      querySnapshot.forEach((doc: DocumentSnapshot<DocumentData>) => {
        const cardData = doc.data();
        const card: ICard = {
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


function* watchCardsChanges(cardsChannel: EventChannel<ICard[]>): Generator<any, void, any> {
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

    yield take('cards/fetchCardsRequest');
    

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

  } catch (error) {
    console.log(error)
  }
}


export function* cardSaga() {
  yield takeEvery('cards/fetchCardsRequest', fetchCardsSaga);
  yield takeEvery('cards/addCardRequest', addCardSaga);
}

export default cardSaga;