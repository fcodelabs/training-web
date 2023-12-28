import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, DiaryCardStateType, SubmitCard } from "../../utilities/types";


const initialState: DiaryCardStateType = {
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
        watchingCards: (state, action:PayloadAction<String>) => {
            
        }

    },
});

export const { setCards, addCardByUser, watchingCards } = diaryCardSlice.actions;
export default diaryCardSlice.reducer;
