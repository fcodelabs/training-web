import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getMsgStart: (state) => {
      state.isFetching = true;
    },
    getMsgSuccess: (state, action) => {
      state.isFetching = false;
      state.messages = action.payload;
      state.error = false;
    },
    getMsgFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getMsgStart, getMsgSuccess, getMsgFailure } =
  messageSlice.actions;
export default messageSlice.reducer;
