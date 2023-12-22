import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./slices/addCardSlice";
import loginSlice from "./slices/loginStateSlice";
import submitSlice from "./slices/cardSubmitSlice";
import { watchGetCardSaga } from "./saga/cardSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware: any[] = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    addingCards: cardsSlice,
    login: loginSlice,
    submit: submitSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(watchGetCardSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
