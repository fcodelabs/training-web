import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IDiaryData {
  title: string;
  username: string;
  description: string;
}

interface DiaryCardState {
  diaryCardEntries: IDiaryData[];
}

const initialState : DiaryCardState = {
  diaryCardEntries: [],
}

const diaryCardSlice = createSlice({
  name: "diaryCardSlice",
  initialState,
  reducers: {
    addDiaryCard(state, action: PayloadAction<IDiaryData>) {
      state.diaryCardEntries.push(action.payload);
    },
    getDiaryCardEntries(state, action: PayloadAction<IDiaryData[]>) {
      state.diaryCardEntries = action.payload;
    },
    fetchDiaryCardEntries() {},
  },
});

export const { actions: diaryCardActions, reducer: diaryCardReducer } =
  diaryCardSlice;
