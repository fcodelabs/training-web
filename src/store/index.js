import { configureStore } from '@reduxjs/toolkit';
import diarySlice from './diary-slice';

const store = configureStore({
  reducer: {
    diary: diarySlice.reducer,
  },
});

export default store;
