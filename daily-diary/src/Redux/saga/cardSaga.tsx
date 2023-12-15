import { delay, put, takeEvery } from "redux-saga/effects";

import { getCard, setCard } from "../slices/addCardSlice";

import { getCards } from "../../firebase";

interface Card {
  title: string;
  description: string;
}

export function* getCardSaga(): Generator<any> {
  let cards: Card[] = [];
  yield getCards().then((cardData) =>
    cardData.forEach((item) => cards.push(item))
  );

  yield put(setCard(cards));
  yield delay(2000);
  yield put(getCard());
}

export function* watchSetCardSaga() {
  yield takeEvery("addingCards/getCard", getCardSaga);
}
