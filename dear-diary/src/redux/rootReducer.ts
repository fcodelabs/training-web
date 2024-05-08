import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import diaryCardReducer from './diarycard/diaryCardSlice';
import notificationReducer from './notification/notificationSlice';


const rootReducer = combineReducers({
  user: userReducer,
  diaryCard: diaryCardReducer,
  notification: notificationReducer,
});

export default rootReducer;
