import { createSlice } from '@reduxjs/toolkit';

const diarySlice = createSlice({
  name: 'diarySlice',
  initialState: {
    diaries: [],
    totalDiaries: 0,
  },
  reducers: {
    saveDiaries: (state, action) => {
      state.diaries.length = 0;
      const newDiaries = action.payload;

      newDiaries.map((diary) =>
        state.diaries.push({
          id: diary.id,
          name: diary.name,
          title: diary.title,
          description: diary.description,
          cardColor: diary.cardColor,
        })
      );
    },

    removeDiary: (state, action) => {
      const id = action.payload.id;
      state.totalDiaries--;
      state.diaries = state.diaries.filter((diary) => diary.id !== id);
    },

    saveTotalDiaries: (state, action) => {
      state.totalDiaries = action.payload;
    },

    getDiaries: () => {},
  },
});

export const diaryActions = diarySlice.actions;
export default diarySlice;
