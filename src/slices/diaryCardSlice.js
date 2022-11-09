import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    diaryCards: [],
};

export const diaryCardSlice = createSlice({
    name: "diaryCard",
    initialState,
    reducers: {
        addDiaryCard: (state, action) => {
            state.diaryCards = [...state.diaryCards, action.payload];
        }
    }
});

export const { addDiaryCard } = diaryCardSlice.actions;

export const selectDiaryCards = (state) => state.diaryCard.diaryCards;

export default diaryCardSlice.reducer;
