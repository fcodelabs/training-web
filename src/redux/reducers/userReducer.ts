import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string | null;
  name: string;
}

interface UserState {
  users: User[];
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

    addUser: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },

    setUsers: (state, action: PayloadAction<User[]>) => {
      return {
        ...state,
        users: action.payload,
      };
    },

    setCurrentUsername: (state, action: PayloadAction<string | null>) => {
      return {
        ...state,
        currentUsername: action.payload,
      };
    },

  },
});

export const { addUser, setUsers, setCurrentUsername } = userSlice.actions;


export default userSlice.reducer;