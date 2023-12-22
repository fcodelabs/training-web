import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Card = {
    id: string
    title: string;
    body: string;
};

export type SubmitCard = {
    title: string;
    body: string;
};

type InitialStateType = {
    isLoading: boolean;
    cards: Card[];

};

const initialState: InitialStateType = {
    isLoading:true,
    cards: []
};

export const searchCards = (searchText: string, cards: Card[]) => {
    return cards.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase()));
};

const diaryCardSlice = createSlice({
    name: "diaryCard",
    initialState: initialState,
    reducers: {
        addCardByUser: (state, action: PayloadAction<SubmitCard>) => {},
        setCards: (state, action: PayloadAction<Card[]>) => {
            state.isLoading = false;
            state.cards = action.payload;
          },
        watchingCards: (state) => {
            
        }


    },
});

export const { setCards, addCardByUser, watchingCards } = diaryCardSlice.actions;
export default diaryCardSlice.reducer;
