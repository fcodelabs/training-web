import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICard {
  id?: string;
  title: string;
  description: string;
  username: string | null;
}
 
const cardSlice = createSlice({
  name: 'cards',
  initialState: [] as ICard[],
  reducers: {
    setCards: (state, action: PayloadAction<ICard[]>) => {
      return [...action.payload];
    },
    addCardRequest: (state, action: PayloadAction<ICard>) => {
      return [...state, action.payload];
    },
    
    addCardFailure: (state, action: PayloadAction<string>) => {
      return state.map((card) => ({ ...card, error: action.payload }));
    },
    fetchCardsRequest: (state, action: PayloadAction) => {
      return state;
    },
  },
});

 
export const { setCards,addCardRequest,addCardFailure,fetchCardsRequest } = cardSlice.actions;
export default cardSlice.reducer;