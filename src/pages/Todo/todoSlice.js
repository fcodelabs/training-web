import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    detailList(state, action) {},

    postAdded(state, action) {
      console.log(action.payload);
    },

    saveTodo(state, action) {
      state.todoList = action.payload;
    },
  },
});

export default todoSlice;
