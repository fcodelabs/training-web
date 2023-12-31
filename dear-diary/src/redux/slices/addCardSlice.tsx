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
      //use to get cards from the firebase
    },
    sendCard: (state, action: PayloadAction<Card>) => {
      //use to send cards to the firebase
    },
  },
});

export const { addCard, setCard, getCard, sendCard } = cardsSlice.actions;
export default cardsSlice.reducer;
