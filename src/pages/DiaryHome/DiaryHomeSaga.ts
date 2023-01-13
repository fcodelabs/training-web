import { put, takeEvery, all, call, take, cancelled } from "redux-saga/effects";
import { colRef } from "../../utils/firebaseConfig";
import { addDoc, onSnapshot } from "firebase/firestore";
import { EventChannel, eventChannel } from "redux-saga";

type DiaryCard = {
  title: string;
  subTitle: string;
  description: string;
  color: string;
};

function fetch() {
  return eventChannel((emit) => {
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let diaryCards: DiaryCard[] = [];

      snapshot.docs.forEach((doc: any) => {
        diaryCards.push({
          title: doc.data().title,
          subTitle: doc.data().subTitle,
          description: doc.data().description,
          color: doc.data().color,
        });
      });

      emit(diaryCards);
    });

    return unsubscribe;
  });
}

function* fetchDiaryCards(): any {
  const channel: EventChannel<any> = yield call(fetch);
  try {
    while (true) {
      const diaryCards = yield take(channel);
      yield put({ type: "diaryCard/getCardsSuccess", payload: diaryCards });
    }
  } catch (error: any) {
    yield put({ type: "diaryCard/getCardsFailed", payload: error.message });
  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
}

function* submitDiaryCard(action: any): any {
  try {
    console.log(action.payload);
    const response = yield addDoc(colRef, action.payload);
    yield put({
      type: "diaryCard/sendNewCardSuccess",
      payload: action.payload,
    });
  } catch (error: any) {
    yield put({ type: "diaryCard/sendNewCardFailed", payload: error.message });
  }
}

function* getDiaryCards() {
  yield takeEvery("diaryCard/getCards", fetchDiaryCards);
}

function* addNewDiaryCard() {
  yield takeEvery("diaryCard/sendNewCard", submitDiaryCard);
}

export default function* rootSaga() {
  yield all([getDiaryCards(), addNewDiaryCard()]);
}
