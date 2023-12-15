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
    cards: Card[];

};

const initialState: InitialStateType = {

    cards: [],
};

export const searchCards = (searchText: string, cards: Card[]) => {
    return cards.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase()));
};

const diaryCardSlice = createSlice({
    name: "diaryCard",
    initialState: initialState,
    reducers: {
        addCardByUser: (state, action: PayloadAction<SubmitCard>) => {
            //
        },
        addCards: (state, action: PayloadAction<Card[]>) => {
           state.cards = action.payload;
            
        }

    },
});

export const { addCards, addCardByUser } = diaryCardSlice.actions;
export default diaryCardSlice.reducer;
