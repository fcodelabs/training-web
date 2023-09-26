import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DiaryEntry } from "../type/DiaryEntry";

interface DiaryState {
  diaryEntries: DiaryEntry[];
}

const initialState: DiaryState = {
  diaryEntries: [],
};

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDiaryEntry: (state, action: PayloadAction<DiaryEntry>) => {
      state.diaryEntries.push(action.payload);
    },
    getDiaryEntries: (state, action: PayloadAction<DiaryEntry[]>) => {
      state.diaryEntries = action.payload;
    },
    fetchDiaryEntries: () => {},
  },
});

const diaryCardAction = diarySlice.actions;
const diaryCardReducer = diarySlice.reducer;
export { diaryCardAction, diaryCardReducer };
