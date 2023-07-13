import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cardReducer from "../components/DiaryComponents/cardSlice";
import signInReducer from "../Containers/SignInFiles/signInSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../components/DiaryComponents/sagas";

// Create the Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { card: cardReducer, createUser: signInReducer },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
