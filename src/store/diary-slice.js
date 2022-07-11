import { createSlice } from '@reduxjs/toolkit';

const diarySlice = createSlice({
  name: 'diarySlice',
  initialState: {
    diaries: [],
    totalDiaries: 0,
    isChangeStore: false,
  },
  reducers: {
    saveDiaries: (state, action) => {
      state.isChangeStore = true;
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

    replaceDiary: (state, action) => {
      const newDiaries = action.payload;
      state.diaries.length = 0;

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
      state.isChangeStore = false;
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
