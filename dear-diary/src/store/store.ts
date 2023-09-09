// store.ts
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Create your root reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
