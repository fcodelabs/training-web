import { createSlice } from '@reduxjs/toolkit';

const diarySlice = createSlice({
  name: 'diarySlice',
  initialState: {
    diaries: [],
    totalDiaries: 0,
    isChangeStore: false,
  },
  reducers: {
    addDiary: (state, action) => {
      const newDiary = action.payload;
      state.totalDiaries++;
      state.isChangeStore = true;

      state.diaries.push({
        id: newDiary.id,
        name: newDiary.name,
        title: newDiary.title,
        description: newDiary.description,
        cardColor: newDiary.cardColor,
      });
    },
    removeDiary: (state, action) => {
      const id = action.payload;
      state.totalDiaries--;
      state.isChangeStore = true;
      state.diaries = state.diaries.filter((diary) => diary.id !== id);
    },
    saveDiaries: (state, action) => {
      state.isChangeStore = true;
      // state.totalDiaries = action.payload.totalDiaries;
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
    saveTotalDiaries: (state, action) => {
      const totalDiaries = action.payload;
      state.totalDiaries = totalDiaries;
      console.log(action.payload);
    },
    getDiaries: () => {},
  },
});

export const diaryActions = diarySlice.actions;
export default diarySlice;
