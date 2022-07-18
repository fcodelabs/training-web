// import { colRef } from "../services/firebase";
// import { getDocs } from "firebase/firestore";
// import { call, takeEvery, put } from "redux-saga/effects";
// import { diaryActions } from "../redux/diarySlice";

// function* getDiariesfetch() {
//     let diaryData = [];
//     yield call(() => {
//         getDocs(colRef)
//             .then((snapshots) => {
//                 snapshots.docs.map((doc) => diaryData.push({ ...doc.data() }));
//             })
//             .catch((err) => {
//                 console.log("error when loading data: " + err);
//             });
//     });
//     yield put(diaryActions.addCard(diaryData));
// }

// const diariesSaga = [takeEvery(diaryActions.getDiaries, getDiariesfetch)];
// export default diariesSaga;
