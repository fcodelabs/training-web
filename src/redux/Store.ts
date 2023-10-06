import createSagaMiddleware from "redux-saga";
import { diarySaga } from "./diarySaga";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { diaryCardReducer } from "./diarySlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    diaryEntries: diaryCardReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(diarySaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
