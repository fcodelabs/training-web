import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

const cardsSlice = createSlice({
  name: "addingCards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    setCard: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { addCard, setCard } = cardsSlice.actions;
export default cardsSlice.reducer;
