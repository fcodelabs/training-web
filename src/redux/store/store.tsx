import { createSlice, configureStore } from '@reduxjs/toolkit';

//create interface to accept string values to state user
interface UserState {
  user: string;
}

const initialState: UserState = { user: "demo" };

//create a slice to save the user state
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser(state, action) {
      state.user = action.payload;
    }
  }
});

//configure store
const store = configureStore({
  reducer: userSlice.reducer
});

//export actions and store
export const userActions = userSlice.actions;

export default store;