import { createSlice} from '@reduxjs/toolkit';

//create interface to accept string values to state user
interface UserState {
    user: string;
  }
  

const initialState: UserState = { user: "demo" };

//create a slice to save the user state
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser(state, action) {
      state.user = action.payload;
    }
  }
});
