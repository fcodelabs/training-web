import { createSlice } from "@reduxjs/toolkit";

export const diaryslice = createSlice({
  name: "diary",
  initialState: {
    diaries: [] as any,
  },
  reducers: {
    getDiaries: (state) => {
      return state;
    },

    setDiaries: (state, action) => {
      state.diaries = action.payload;
    },

    callUpdateDiary: (state, action) => {
      return state;
    },

    updateDiaries: (state, action) => {
      state.diaries = [...state.diaries];
    },
  },
});

export const { getDiaries, callUpdateDiary } = diaryslice.actions;

export default diaryslice.reducer;
