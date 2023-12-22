import { call, put, take, takeEvery } from "redux-saga/effects";

import { collectionRef } from "../../configs/firebase";

import { setCard } from "../slices/addCardSlice";
import { onSnapshot, query, where } from "firebase/firestore";
import { END, eventChannel } from "redux-saga";
import { PayloadAction } from "@reduxjs/toolkit";

interface Card {
  username: string;
  title: string;
  description: string;
}

function getCardSaga(username: string) {
  return eventChannel<Card[]>((emitter) => {
    const unsubscribe = onSnapshot(
      query(collectionRef, where("username", "==", username)),
      (snapshot) => {
        const cards: Card[] = [];
        snapshot.forEach((doc) => {
          cards.push(doc.data() as Card);
        });
        emitter(cards);
      }
    );
    return () => {
      unsubscribe();
      emitter(END);
    };
  });
}

export function* setCardSaga(
  action: PayloadAction<string>
): Generator<any, any, any> {
  try {
    const username = action.payload;
    const channel = yield call(getCardSaga, username);
    while (true) {
      const DiaryCards: any = yield take(channel);
      yield put(setCard(DiaryCards));
    }
  } catch (err) {
    console.log(err);
  }
}
export function* watchGetCardSaga(): Generator<any, any, any> {
  yield takeEvery("addingCards/getCard", setCardSaga);
}
