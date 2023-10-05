import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DiaryData {
  title: string;
  username: string;
  description: string;
}

interface DiaryCardState {
  diaryCardEntries: DiaryData[];
}

const initialState : DiaryCardState = {
  diaryCardEntries: [],
}

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
