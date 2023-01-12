import { createSlice } from "@reduxjs/toolkit";
import { msgData } from "../../helpers/Interfaces";


var temp: msgData[];
temp = [];

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: temp,
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
    addMsgStart: (state, action) => {
      state.isFetching = true;
    },
    addMsgSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      // console.log(action.payload);
      state.messages.push(action.payload);
    },
    addMsgFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getMsgStart,
  getMsgSuccess,
  getMsgFailure,
  addMsgStart,
  addMsgFailure,
  addMsgSuccess,
} = messageSlice.actions;
export default messageSlice.reducer;
