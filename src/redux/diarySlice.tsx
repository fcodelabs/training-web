import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Diary {
  title: string;
  description: string;
  nickname: string;
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
    fetchDiaries: (state, action: PayloadAction<{ nickname: string | null }>) => {},
  },
});

export const { addDiary, setDiaries, fetchDiaries } = diarySlice.actions;

export default diarySlice.reducer;
