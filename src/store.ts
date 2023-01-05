
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './pages/SignInForm/userSlice'
import cardsReducer from './pages/DiaryHome/cardsSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cardIdsReducer from "./pages/DiaryHome/cardIdsSlice";

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['cards', 'cardIds']
}

const rootReducer = combineReducers({
    user: userReducer,
    cards: cardsReducer,
    cardIds: cardIdsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store =  configureStore({
    reducer: persistedReducer,
})
export let persistor = persistStore(store)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
