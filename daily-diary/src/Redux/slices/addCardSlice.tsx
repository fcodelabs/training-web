import { createAction, createSlice } from "@reduxjs/toolkit";

interface Card {
  title: string;
  description: string;
}

interface InitialState {
  cards: Card[];
}

const initialState: InitialState = {
  cards: [],
};

export const addCard = createAction<Card>("cards/addCard");

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },
  },
});

export default cardsSlice.reducer;
