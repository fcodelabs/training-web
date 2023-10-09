import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "./diaryCardSaga/diaryCardSaga";
import { diaryCardReducer } from "./diaryCardSlice/diaryCardSlice";
import { useDispatch } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    diaryCardSlice: diaryCardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

