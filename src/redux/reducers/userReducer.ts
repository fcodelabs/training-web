import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  id: string | null;
  name: string;
}

interface UserState {
  users: IUser[];
  currentUsername: string | null;
}

const storedUsername = localStorage.getItem('username');

const initialState: UserState = {
  users: [],
  currentUsername: storedUsername || null,
};
;

const userSlice = createSlice({

  name: 'users',
  initialState,

  reducers: {


    setCurrentUsername: (state, action: PayloadAction<string | null>) => {
      return {
        ...state,
        currentUsername: action.payload,
      };
    },

  },
});

export const {setCurrentUsername } = userSlice.actions;


export default userSlice.reducer;