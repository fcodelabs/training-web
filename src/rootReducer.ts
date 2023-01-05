import { combineReducers } from '@reduxjs/toolkit';
import userReducer from "./pages/SignInForm/userSlice";
import cardsReducer from "./pages/DiaryHome/cardsSlice";

const rootReducer = combineReducers({
    cards: cardsReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;