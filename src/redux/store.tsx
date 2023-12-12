import { configureStore } from '@reduxjs/toolkit';
import diaryReducer from './diarySlice';

const store = configureStore({
  reducer: {
    diaries: diaryReducer,
  },
});

export default store;
 