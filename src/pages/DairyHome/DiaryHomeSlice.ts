import { createSlice } from "@reduxjs/toolkit";

interface MyProps { 
  title : string
  name : string
  description : string 
}
  
var msg: MyProps[];
msg = [];


const diaryHomeSlice = createSlice({
  name: "message",
  initialState: {
    messages: msg,
    isLoading: false,
    error: false,
  },
  reducers: {
    getDiaryCards: (state) => {
      state.isLoading = true;
    },
    getDiaryCardSuccess: (state, action) => {
      state.isLoading = false;
      state.messages = action.payload;
      state.error = false;
    },
    getDiaryCardFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    addDiaryCard: (state, action) => {
      state.isLoading = true;
    },
    addDiaryCardSuccess: (state, action) => {
      state.isLoading = false;
      // state.messages.push(action.payload);
      state.error = false; 
    },
    addDiaryCardFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { getDiaryCards, getDiaryCardSuccess, getDiaryCardFailure, addDiaryCard,addDiaryCardFailure,addDiaryCardSuccess } =
diaryHomeSlice.actions;
export default diaryHomeSlice.reducer;
