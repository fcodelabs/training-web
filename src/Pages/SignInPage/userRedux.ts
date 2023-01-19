import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "user",
  initialState: {
    username: null,
    isloggedin: false,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.isloggedin = true;
    },
    logout: (state) => {
      state.username = null;
      state.isloggedin = false;
    },
    setState: (state, action) => {
      state.username = action.payload.username;
      state.isloggedin = action.payload.isloggedin;
    },
  },
});

export const { login, logout, setState } = userslice.actions;

export default userslice.reducer;
