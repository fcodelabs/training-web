import { createSlice } from "@reduxjs/toolkit";

interface cardData {
  name: string;
  title: string;
  description: string;
}
var temp: cardData[];
temp = [];


const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: temp,
    isFetching: false,
    error: false,
  },
  reducers: {
    getCardStart: (state) => {
      state.isFetching = true;
    },
    getCardSuccess: (state, action) => {
      state.isFetching = false;
      state.cards = action.payload;
      state.error = false;
    },
    getCardFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addCardStart: (state, action) => {
      state.isFetching = true;
    },
    addCardSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.cards.push(action.payload);
    },
    addCardFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getCardStart, getCardSuccess, getCardFailure, addCardStart,addCardFailure,addCardSuccess } =
  cardSlice.actions;
export default cardSlice.reducer;
