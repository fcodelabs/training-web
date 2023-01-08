import { takeEvery, put } from "redux-saga/effects";
import { getDocs } from "firebase/firestore";
import { diaryCollectionRef } from "../../utils/firestore-collections";
import { addDoc } from "firebase/firestore";

function* getDiaries(): any {
  try {
    const data = yield getDocs(diaryCollectionRef);
    const diaries = yield data.docs.map(
      (doc: { id: any; data: () => any }) => ({
        id: doc.id,
        data: doc.data(),
      })
    );
    yield put({ type: "diary/setDiaries", payload: diaries });
  } catch (error) {
    yield put({ type: "diary/setDiaries", payload: [] });
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
