import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DiaryData = {
  title: string;
  username: string;
  description: string;
};

interface DiaryCardState {
  diaryCardList: DiaryData[];
}

const initialState: DiaryCardState = {
  diaryCardList: [],
};

export const diaryCardSlice = createSlice({
  name: "diaryCard",
  initialState,
  reducers: {
    addDiaryCard: (state, action: PayloadAction<DiaryData>) => {
      state.diaryCardList.push(action.payload);
    },
    setDiaryCardList: (state, action: PayloadAction<DiaryData[]>) => {
      state.diaryCardList = action.payload;
    },
    fetchDiaryCardList: () => {},
  },
});

const diaryCardActions = diaryCardSlice.actions;
const diaryCardReducer = diaryCardSlice.reducer;
export { diaryCardActions, diaryCardReducer };
