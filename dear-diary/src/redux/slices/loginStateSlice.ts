import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isLoggedIn: boolean;
}

const initialState: InitialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setTrue: (state) => {
      state.isLoggedIn = true;
    },
    setFalse: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setTrue, setFalse } = loginSlice.actions;
export default loginSlice.reducer;
