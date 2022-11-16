import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaryCards: [],
};

export const diaryCardSlice = createSlice({
  name: "diaryCard",
  initialState,
  reducers: {
    setAllDiaryCards: (state, action) => {
      state.diaryCards = action.payload;
      console.log("set cards");
    },
    getAllDiaryCards: () => {
      console.log("to get cards");
    },
    addDiaryCard : (action) => {
      console.log("to add");
    },
  },
});

export const { setAllDiaryCards, getAllDiaryCards, addDiaryCard } = diaryCardSlice.actions;

// export const selectDiaryCards = (state) => state.diaryCards.diaryCards;

export default diaryCardSlice.reducer;
