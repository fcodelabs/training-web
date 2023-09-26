import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DiaryEntry {
  title: string;
  uName: string;
  description: string;
}

interface DiaryState {
  diaryEntries: DiaryEntry[];
}

const initialState: DiaryState = {
  diaryEntries: [],
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDiaryEntry: (state, action: PayloadAction<DiaryEntry>) => {
      state.diaryEntries.push(action.payload);
    },
  },
});

export const { addDiaryEntry } = diarySlice.actions;

export default diarySlice.reducer;
