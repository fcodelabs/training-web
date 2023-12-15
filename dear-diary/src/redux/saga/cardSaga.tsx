import { call, put, take, takeEvery } from "redux-saga/effects";

import { collectionRef } from "../../configs/firebase";

import { setCard } from "../slices/addCardSlice";
import { onSnapshot, query } from "firebase/firestore";
import { END, eventChannel } from "redux-saga";

interface Card {
  title: string;
  description: string;
}

function getCardSaga() {
  return eventChannel<Card[]>((emitter) => {
    const unsubscribe = onSnapshot(query(collectionRef), (snapshot) => {
      const cards: Card[] = [];
      snapshot.forEach((doc) => {
        cards.push(doc.data() as Card);
      });
      emitter(cards);
    });
    return () => {
      unsubscribe();
      emitter(END);
    };
  });
}

export function* setCardSaga(): Generator<
  any,
  void,
  ReturnType<typeof getCardSaga>
> {
  try {
    const channel = yield call(getCardSaga);
    while (true) {
      const DiaryCards: any = yield take(channel);
      yield put(setCard(DiaryCards));
    }
  } catch (err) {
    console.log(err);
  }
}
export function* watchGetCardSaga() {
  yield takeEvery("addingCards/getCard", setCardSaga);
}
