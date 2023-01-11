import { take, takeEvery, put, call, cancelled } from "redux-saga/effects";
import { onSnapshot } from "firebase/firestore";
import { diaryCollectionRef } from "../../utils/firestore-collections";
import { addDoc } from "firebase/firestore";
import { EventChannel, eventChannel } from "redux-saga";

function fetchDiaries() {
  return eventChannel((emit) => {
    const unsubscribe = onSnapshot(diaryCollectionRef, (snapshot) => {
      const diaries = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      emit(diaries);
    });
    return unsubscribe;
  });
}

function* getDiaries(): any {
  const channel: EventChannel<any> = yield call(fetchDiaries);
  try {
    while (true) {
      const diaries = yield take(channel);
      yield put({ type: "diary/setDiaries", payload: diaries });
    }
  } finally {
    if (yield cancelled()) {
      yield channel.close();
    }
  }
}

function* updateDiaries(action: any): any {
  const data = yield action.payload;
  console.log("data", data);
  try {
    const response = yield addDoc(diaryCollectionRef, data);
    yield put({
      type: "diary/updateDiaries",
      payload: { id: response.id, data },
    });
  } catch (error) {
    console.log("error", error);
  }
}

function* diarySaga() {
  yield takeEvery("diary/getDiaries", getDiaries);
  yield takeEvery("diary/callUpdateDiary", updateDiaries);
}

export default diarySaga;
