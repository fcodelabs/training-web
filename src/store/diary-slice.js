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
      state.totalDiaries++;
      state.isChangeStore = true;
      const newDiary = action.payload;

      state.diaries.push({
        id: newDiary.id,
        name: newDiary.name,
        title: newDiary.title,
        description: newDiary.description,
        cardColor: newDiary.cardColor,
      });
    },
    removeDiary: () => {},
  },
});

export const diaryActions = diarySlice.actions;
export default diarySlice;
