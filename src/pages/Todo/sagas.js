import { all, put, takeEvery } from "redux-saga/effects";
//import {asyncAction , asyncFetchTodos} from "../features/todo/action";
import todoSlice from "./todoSlice";
import "firebase/firestore";
import todoCom from "../../utils/firebaseConfig";
import { addDoc } from "firebase/firestore";

function* watchPostFunc({ payload: post }) {
  yield addDoc(todoCom, post);
  console.log(post);
}

function* watchLoadTodos({ payload: post }) {}

function* watchFunc() {
  yield takeEvery(todoSlice.actions.postAdded, watchPostFunc);
  //yield takeEvery(todoSlice.actions.detailList, watchLoadTodos);
}

export default function* rootSaga() {
  yield all([watchFunc()]);
}
