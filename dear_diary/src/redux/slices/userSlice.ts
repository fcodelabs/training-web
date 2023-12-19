import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  nickname: string;
}

const loadInitialState = (): UserState => {
  try {
    const storedState = localStorage.getItem("userState");
    if (storedState) {
      return JSON.parse(storedState);
    }
  } catch (error) {
    console.error("Error loading user state from localStorage:", error);
  }

  return { nickname: "" };
};

const userSlice = createSlice({
  name: "user",
  initialState: {nickname: ""} as UserState,
  reducers: {
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
  },
});

export const { setNickname } = userSlice.actions;
export const userReducer = userSlice.reducer;
