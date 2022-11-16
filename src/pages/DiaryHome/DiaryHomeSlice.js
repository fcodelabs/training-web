import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickname: "",
  diaryCards: [],
};

export const DiaryHomeSlice = createSlice({
  name: "diaryCard",
  initialState,
  reducers: {
    setNickname: (state,action) => {
      state.nickname = action.payload;
    },
    removeNickname: (state) => {
      state.nickname = "";
    },
    setAllDiaryCards: (state, action) => {
      state.diaryCards = action.payload;
    },
    getAllDiaryCards: () => {},
    addDiaryCard : (action) => {},
  },
});

export const {  setNickname, removeNickname, setAllDiaryCards, getAllDiaryCards, addDiaryCard } = DiaryHomeSlice.actions;

export default DiaryHomeSlice.reducer;
