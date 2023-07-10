import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Cards {
  title: string;
  description: string;
}

interface CardState {
  cards: Cards[];
}

const initialState: CardState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Cards>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
