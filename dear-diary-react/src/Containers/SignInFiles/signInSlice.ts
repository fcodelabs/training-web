import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignInState {
  userName: string;
}

const initialState: SignInState = {
  userName: "",
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    createUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { createUserName } = signInSlice.actions;
export default signInSlice.reducer;
