import { configureStore } from "@reduxjs/toolkit";
import diaryCardReducer from "./pages/DiaryHome/diaryCardSlice";
import createSagaMiddleware from "redux-saga";
import  rootSaga  from "./pages/DiaryHome/DiaryHomeSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    diaryCard: diaryCardReducer,
  },
  middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
