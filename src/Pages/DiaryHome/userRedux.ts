import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
  name: "user",
  initialState: {
    username: null,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
    },
  },
});

export const { login } = userslice.actions;

export default userslice.reducer;
