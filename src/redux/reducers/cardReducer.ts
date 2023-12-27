import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: string;
  title: string;
  description: string;
  username: string | null;
}

export const fetchCardsRequest = () => ({
  type: 'FETCH_CARDS_REQUEST',
});

const cardSlice = createSlice({
  name: 'cards',
  initialState: [] as Card[],
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      return [...state, action.payload];
    },
    setCards: (state, action: PayloadAction<Card[]>) => {
      return [...action.payload];
    },
  },
});

export const { addCard, setCards } = cardSlice.actions;

export default cardSlice.reducer;