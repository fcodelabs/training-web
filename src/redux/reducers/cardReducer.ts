import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICard {
  id: string;
  title: string;
  description: string;
  username: string | null;
}

export const addCardRequest = (title: string, description: string, username: string | null) => ({
  type: 'ADD_CARD_REQUEST',
  payload: { title, description, username: username || '' },
});

export const addCardSuccess = (card: ICard) => ({
  type: 'ADD_CARD_SUCCESS',
  payload: { card },
});

export const addCardFailure = (error: string) => ({
  type: 'ADD_CARD_FAILURE',
  payload: { error },
});

export const fetchCardsRequest = () => ({
  type: 'FETCH_CARDS_REQUEST',
});

const cardSlice = createSlice({
  name: 'cards',
  initialState: [] as ICard[],
  reducers: {
    setCards: (state, action: PayloadAction<ICard[]>) => {
      return [...action.payload];
    },
  },
});


export const { setCards } = cardSlice.actions;
export default cardSlice.reducer;