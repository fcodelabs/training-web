import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import diaryCardReducer from './diaryCardSlice';

const rootReducer = combineReducers({
  user: userReducer,
  diaryCard: diaryCardReducer,
});

export default rootReducer;
