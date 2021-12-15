import { call, put, takeEvery } from 'redux-saga/effects';

const messagesRef = firestore.collection("Cards").doc("document");


  
  export function* addCard() {
    try {
      yield put(requestList());
      const data = yield call(() => {
        return messagesRef.get().then((doc) => doc.data());
      });
      console.log(data);
      yield put(requestListSuccess(data));
    } catch (error) {
      yield put(requestListError());
    }
  }



//////////////////////////////////

// import { takeEvery, put, all, call } from "redux-saga/effects";
// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { firestore } from ".././firebase.utils";


// function* rootSaga() {
//   yield all([call(watchFetchList)]);
// }

// export function* watchFetchList() {
//   console.log("saga");
//   yield takeEvery("FETCHED_List", fetchListAsync);
// }

// export function* fetchListAsync() {
//   try {
//     yield put(requestList());
//     const data = yield call(() => {
//       return messagesRef.get().then((doc) => doc.data());
//     });
//     /*     
//       fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       ).then((responde) => responde.json());
//     });*/
//     console.log(data);
//     yield put(requestListSuccess(data));
//   } catch (error) {
//     yield put(requestListError());
//   }
// }

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

// export default store;
