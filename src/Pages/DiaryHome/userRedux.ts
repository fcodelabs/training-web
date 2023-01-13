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
  },
});

export const { login, logout } = userslice.actions;

export default userslice.reducer;
