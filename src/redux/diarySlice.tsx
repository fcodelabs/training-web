import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Diary {
  title: string;
  description: string;
}

const diarySlice = createSlice({
  name: 'diaries',
  initialState: [] as Diary[],
  
  reducers: {
    addDiary: (state, action: PayloadAction<Diary>) => {
      state.push(action.payload);
    },
    setDiaries: (state, action: PayloadAction<Diary[]>) => {
      return action.payload;
    },
  },
});

export const { addDiary, setDiaries } = diarySlice.actions;

export default diarySlice.reducer;
