import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DiaryCard = {
  title: string;
  subTitle: string;
  description: string;
  color: string;
};

type InitialState = {
  loading: boolean;
  diaryCards: DiaryCard[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  diaryCards: [],
  error: "",
};

export const diaryCardSlice = createSlice({
  name: "diaryCard",
  initialState,
  reducers: {
    sendNewCard: (state,action:PayloadAction<DiaryCard>) => {
      state.loading = true;
    },

    sendNewCardSuccess: (state, action: PayloadAction<DiaryCard>) => {
      state.loading = false;
      state.diaryCards.push(action.payload);
      state.error = "";
    },
    sendNewCardFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    getCards: (state) => {
      state.loading = false;
    },
    getCardsSuccess: (state, action: PayloadAction<DiaryCard[]>) => {
      state.loading = false;
      state.diaryCards = action.payload;
      state.error = "";
    },
    getCardsFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  sendNewCard,
  sendNewCardSuccess,
  sendNewCardFailed,
  getCards,
  getCardsSuccess,
  getCardsFailed,
} = diaryCardSlice.actions;
export default diaryCardSlice.reducer;
