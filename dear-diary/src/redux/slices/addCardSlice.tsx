import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Card {
  username: string;
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
    getCard: (state) => {
      console.log("Loading...");
    },
  },
});

export const { addCard, setCard, getCard } = cardsSlice.actions;
export default cardsSlice.reducer;
