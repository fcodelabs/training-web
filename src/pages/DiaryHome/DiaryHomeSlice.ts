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
    addMsgStart: (state,action) => {
      state.isFetching = true;
    },
    addMsgSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
    },
    addMsgFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getMsgStart, getMsgSuccess, getMsgFailure, addMsgStart } =
  messageSlice.actions;
export default messageSlice.reducer;
