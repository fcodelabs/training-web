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

  yield addDoc(diaryCollectionRef, {
    name: data.data.name,
    description: data.data.description,
    title: data.data.title,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  yield put({ type: "diary/updateDiaries", payload: data });
}

function* diarySaga() {
  yield takeEvery("diary/getDiaries", getDiaries);
  yield takeEvery("diary/callUpdateDiary", updateDiaries);
}

export default diarySaga;
