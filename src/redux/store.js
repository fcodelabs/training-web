import { configureStore } from "@reduxjs/toolkit";
import diarySlice from "./diarySlice";
// import createSagaMiddleware from "redux-saga";
// import { all } from "redux-saga/effects";
// import diariesSaga from "../sagas/diariesSaga";

// const sagaMiddleware = createSagaMiddleware();
// function* rootSaga() {
//     yield all([...diariesSaga]);
// }

const store = configureStore({
    reducer: { diaryReducer: diarySlice.reducer },
    // middleware: [sagaMiddleware],
});

// sagaMiddleware.run(rootSaga);

export default store;
