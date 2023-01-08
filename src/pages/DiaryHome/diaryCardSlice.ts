import { createSlice, PayloadAction} from "@reduxjs/toolkit";

type DiaryCard = {
  title: string;
  subTitle: string;
  description:string;
  color:string;
}

type InitialState = {
  diaryCards: DiaryCard[];
}

const initialState: InitialState = {
  diaryCards: [],
};

export const diaryCardSlice = createSlice({
  name: "diaryCard",
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<DiaryCard>) => {
      state.diaryCards.push(action.payload);
    },
  },
});

export const {addNewCard} = diaryCardSlice.actions;
export default diaryCardSlice.reducer;