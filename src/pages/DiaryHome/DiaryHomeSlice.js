import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickname: localStorage.getItem("nickname"),
  diaryCards: [],
  error: "",
};

export const DiaryHomeSlice = createSlice({
  name: "diaryCard",
  initialState,
  reducers: {
    setNickname: (state, action) => {
      localStorage.setItem("nickname", action.payload);
      state.nickname = action.payload;
    },
    removeNickname: (state) => {
      state.nickname = "";
    },
    setAllDiaryCards: (state, action) => {
      state.diaryCards = action.payload;
    },
    getAllDiaryCards: () => {},
    addDiaryCard: (action) => {},
    removeDiaryCards: (state) => {
      state.diaryCards = [];
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setNickname,
  removeNickname,
  setAllDiaryCards,
  getAllDiaryCards,
  addDiaryCard,
  removeDiaryCards,
  setError,
} = DiaryHomeSlice.actions;

export default DiaryHomeSlice.reducer;
