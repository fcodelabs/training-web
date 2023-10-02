import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Card from './card';
import { isEqual } from '../../utils/isEqual';

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
      const newCard = action.payload;
      const isUnique = state.cards.every((card) => !isEqual(card, newCard));

      if (isUnique) {
        state.cards.push(newCard);
      }
    },
    addCards: (state, action: PayloadAction<Card[]>) => {
      const newCards = action.payload;
      const uniqueNewCards = newCards.filter((newCard) => {
        return state.cards.every((card) => !isEqual(card, newCard));
      });

      state.cards.push(...uniqueNewCards);
    },
  },
});

export const { addCard, addCards } = cardSlice.actions;
export default cardSlice.reducer;
