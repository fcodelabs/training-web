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

    updateDiaries: (state, action) => {
      state.diaries = [action.payload, ...state.diaries];
    },
  },
});

export const { getDiaries, updateDiaries } = diaryslice.actions;

export default diaryslice.reducer;
