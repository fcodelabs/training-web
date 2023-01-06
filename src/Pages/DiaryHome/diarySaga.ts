import { takeEvery, put } from "redux-saga/effects";
import { getDocs } from "firebase/firestore";
import { diaryCollectionRef } from "../../utils/firestore-collections";

function* getDiaries(): any {
  const data = yield getDocs(diaryCollectionRef);
  const diaries = yield data.docs.map((doc: { id: any; data: () => any }) => ({
    id: doc.id,
    data: doc.data(),
  }));

  yield put({ type: "diary/setDiaries", payload: diaries });
}

function* diarySaga() {
  yield takeEvery("diary/getDiaries", getDiaries);
}

export default diarySaga;
