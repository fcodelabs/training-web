import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./slices/addCardSlice";
import { watchSetCardSaga } from "./saga/cardSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware: any[] = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    addingCards: cardsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(watchSetCardSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
