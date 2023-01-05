
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./rootReducer";
import rootSaga from './rootSaga';

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['cards', 'cardIds']
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);export const store =  configureStore({
    reducer: persistedReducer,
    middleware,
})
export let persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
