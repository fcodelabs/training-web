import { configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './cards/cardSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

//configure store
const store = configureStore({
  reducer: cardSlice.reducer,
  middleware:[sagaMiddleware]
});

 // Run the rootSaga
sagaMiddleware.run(rootSaga);

export const cardsActions = cardSlice.actions;
export default store;