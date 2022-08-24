import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "title 01",
    description: "content 01",
  },
  {
    id: "2",
    title: "title 02",
    description: "content 02",
  },
];

const ToDotSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const TodoCartList = (state) => state.carts;

export const { postAdded } = ToDotSlice.actions;

export default ToDotSlice.reducer;
