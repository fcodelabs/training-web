import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Card from './card';

interface CardState {
  cards: Card[];
}

const initialState: CardState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
