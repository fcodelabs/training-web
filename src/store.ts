import { configureStore } from "@reduxjs/toolkit";
import userRedux from "./Pages/DiaryHome/userRedux";
import diaryRedux from "./Pages/DiaryHome/diaryRedux";
import diarySaga from "./Pages/DiaryHome/diarySaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    user: userRedux,
    diary: diaryRedux,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(diarySaga);

export default store;
