import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Cards {
  id: string;
  title: string;
  description: string;
  userName: string;
}

export interface CardState {
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
    setCards: (state, action: PayloadAction<Cards[]>) => {
      state.cards = action.payload;
    },
    fetchCards: () => {}, // Empty placeholder action creator
  },
});

export const { addCard, setCards, fetchCards } = cardSlice.actions;
export default cardSlice.reducer;
