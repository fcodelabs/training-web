import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import diaryCardSaga from "./diaryCard/saga";
import { diaryCardReducer } from "./diaryCard/diaryCardSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    diaryCardList: diaryCardReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(diaryCardSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
