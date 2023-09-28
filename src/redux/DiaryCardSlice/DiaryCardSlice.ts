import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DiaryData } from "../../types/DiaryCardData";

interface DiaryCardState {
  diaryCardEntries: DiaryData[];
}

const initialState = {
  diaryCardEntries: [],
} as DiaryCardState;

const diaryCardSlice = createSlice({
  name: "diaryCardSlice",
  initialState,
  reducers: {
    addDiaryCard(state, action: PayloadAction<DiaryData>) {
      state.diaryCardEntries.push(action.payload);
    },
    getDiaryCardEntries(state, action: PayloadAction<DiaryData[]>) {
      state.diaryCardEntries = action.payload;
    },
    fetchDiaryCardEntries() {},
  },
});

export const { actions: diaryCardActions, reducer: diaryCardReducer } =
  diaryCardSlice;
