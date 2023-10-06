import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IDiaryData {
  title: string;
  username: string;
  description: string;
}

interface IDiaryCardState {
  diaryCardList: IDiaryData[];
}

const initialState: IDiaryCardState = {
  diaryCardList: [],
};

export const diaryCardSlice = createSlice({
  name: "diaryCard",
  initialState,
  reducers: {
    addDiaryCard: (state, action: PayloadAction<IDiaryData>) => {
      state.diaryCardList.push(action.payload);
    },
    setDiaryCardList: (state, action: PayloadAction<IDiaryData[]>) => {
      state.diaryCardList = action.payload;
    },
    fetchDiaryCardList: () => {},
  },
});

const diaryCardActions = diaryCardSlice.actions;
const diaryCardReducer = diaryCardSlice.reducer;
export { diaryCardActions, diaryCardReducer };
