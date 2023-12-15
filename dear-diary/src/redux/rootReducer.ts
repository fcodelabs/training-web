import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import diaryCardReducer from './diarycard/diaryCardSlice';

const rootReducer = combineReducers({
  user: userReducer,
  diaryCard: diaryCardReducer,
});

export default rootReducer;
