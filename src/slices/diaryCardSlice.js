import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    diaryCards: [],
};

export const diaryCardSlice = createSlice({
    name: "diaryCard",
    initialState,
    reducers: {
        addDiaryCard: (state, action) => {
            state.diaryCards.unshift(action.payload);
        },
        addAllDiaryCards: (state, action) => {
            state.diaryCards.push(...action.payload);
        }
    }
});

export const { addDiaryCard, addAllDiaryCards } = diaryCardSlice.actions;

export const selectDiaryCards = (state) => state.diaryCard.diaryCards;

export default diaryCardSlice.reducer;
