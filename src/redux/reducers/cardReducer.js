// cardReducer.js
import { createSlice } from "@reduxjs/toolkit";

const cardReducer = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      return [...state, { id: action.payload.id, title: action.payload.title, description: action.payload.description }]
    }
  }
});

export const { addCard } = cardReducer.actions;
export default cardReducer.reducer;
