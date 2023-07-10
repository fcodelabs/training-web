import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/userSlice';

//configure store
const store = configureStore({
  reducer: userSlice.reducer
});

//export actions and store
export const userActions = userSlice.actions;

export default store;