import { combineReducers } from '@reduxjs/toolkit';
import userReducer from "./pages/SignInForm/userSlice";
import cardsReducer from "./pages/DiaryHome/cardsSlice";
import addCardReducer from "./pages/DiaryHome/addCardSlice";

const rootReducer = combineReducers({
    cards: cardsReducer,
    user: userReducer,
    addCard: addCardReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;