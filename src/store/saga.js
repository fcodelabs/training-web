import { call, takeLatest } from "redux-saga/effects";
import { addCardToStore, addNewCard } from "../dbHandler";

function* getApiData() {
  yield call(addCardToStore);
}

function* addData(action) {
    yield call(addNewCard(action.payload))
}

  function* mySaga() {
    yield takeLatest("dataGetRequested", getApiData);
    yield takeLatest("dataAddRequested", addData);
  }
  
  export default mySaga;
