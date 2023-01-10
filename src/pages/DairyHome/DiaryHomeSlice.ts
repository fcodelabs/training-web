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
    messages: temp
  },
  reducers: {
    getMessageSuccess: (state, action) => {
      state.messages = action.payload;
    }
  },
});

export const { getMessageSuccess } = messageSlice.actions;
export default messageSlice.reducer;
