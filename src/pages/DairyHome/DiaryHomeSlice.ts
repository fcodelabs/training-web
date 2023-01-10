import { createSlice } from "@reduxjs/toolkit";

interface MyProps { 
  title : string
  name : string
  description : string 
}
  
var temp: MyProps[];
temp = [];


const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: temp,
    isFetching: false,
    error: false,
  },
  reducers: {
    getDiaryCards: (state) => {
      state.isFetching = true;
    },
    getDiaryCardSuccess: (state, action) => {
      state.isFetching = false;
      state.messages = action.payload;
      state.error = false;
    },
    getDiaryCardFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addDiaryCard: (state, action) => {
      state.isFetching = true;
    },
    addDiaryCardSuccess: (state, action) => {
      state.isFetching = false;
      state.messages.push(action.payload);
      state.error = false; 
    },
    addDiaryCardFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getDiaryCards, getDiaryCardSuccess, getDiaryCardFailure, addDiaryCard,addDiaryCardFailure,addDiaryCardSuccess } =
  messageSlice.actions;
export default messageSlice.reducer;
