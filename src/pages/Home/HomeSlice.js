import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    diaryCards: [],
};

export const HomeSlice = createSlice({
    name: "diaryCard",
    initialState,
    reducers: {
        setDiaryCards: (state, action) => {
            state.diaryCards = action.payload;
        },
        getDiaryCards(){},
        addADiaryCard(diaryCard){}
    }
});

export const { setDiaryCards, getDiaryCards, addADiaryCard } = HomeSlice.actions;

export const selectDiaryCards = (state) => state.diaryCard.diaryCards;

export default HomeSlice.reducer;
