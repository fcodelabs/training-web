import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: [],
  desc: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    detailList : (state, action) => {
      state.title.push(action.payload.t);
      state.desc.push(action.payload.d);  

    },
  },
});

export const { detailList  } = todoSlice.actions;

export default todoSlice.reducer;
