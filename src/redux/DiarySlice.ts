import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDiaryEntry {
  title: string;
  username: string;
  description: string;
}

interface IDiaryState {
  diaryEntries: IDiaryEntry[];
}

const initialState: IDiaryState = {
  diaryEntries: [],
};

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDiaryEntry: (state, action: PayloadAction<IDiaryEntry>) => {
      state.diaryEntries.push(action.payload);
    },
    getDiaryEntries: (state, action: PayloadAction<IDiaryEntry[]>) => {
      state.diaryEntries = action.payload;
    },
    fetchDiaryEntries: () => {},
  },
});

const diaryCardAction = diarySlice.actions;
const diaryCardReducer = diarySlice.reducer;
export { diaryCardAction, diaryCardReducer };
