import { createSlice } from "@reduxjs/toolkit";

export const diaryslice = createSlice({
  name: "diary",
  initialState: {
    diaries: [] as any,
    isloading: false,
  },
  reducers: {
    getDiaries: (state) => {
      state.isloading = true;
      return state;
    },

    setDiaries: (state, action) => {
      const diaries = action.payload.filter((diary: any) => {
        const inDiaries = state.diaries.find(
          (diaryInState: any) => diaryInState.id === diary.id
        );
        return !inDiaries;
      });
      state.diaries = [...state.diaries, ...diaries];
      state.isloading = false;
    },

    callUpdateDiary: (state, action) => {
      state.isloading = true;
      return state;
    },

    updateDiaries: (state, action) => {
      const inDiaries = state.diaries.find(
        (diary: any) => diary.id === action.payload.id
      );
      if (!inDiaries) {
        state.diaries.push(action.payload);
      }
      state.isloading = false;
    },
  },
});

export const { getDiaries, callUpdateDiary } = diaryslice.actions;

export default diaryslice.reducer;
