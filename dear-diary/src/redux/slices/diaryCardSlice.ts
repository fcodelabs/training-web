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
        addCard: (state, action: PayloadAction<Card>) => {
           state.cards.push(action.payload);
        
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload);
        },
        editCard: (state, action: PayloadAction<Card>) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload.id);
            state.cards.push(action.payload);
        }

    },
});

export const { deleteCard, editCard, addCard, addCardByUser } = diaryCardSlice.actions;
export default diaryCardSlice.reducer;
