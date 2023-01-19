import { configureStore } from "@reduxjs/toolkit";
import diarySaga from "./Pages/DiaryHome/diarySaga";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./utils/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(diarySaga);

export const persistor = persistStore(store);

export default store;
