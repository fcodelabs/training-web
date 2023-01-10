import { configureStore, combineReducers } from "@reduxjs/toolkit";
import messageReducer from "./pages/DairyHome/DiaryHomeSlice"
import {persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


const rootReducer = combineReducers({
  message:messageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  
});

export let persistor = persistStore(store);
