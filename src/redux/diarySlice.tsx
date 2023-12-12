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
  },
});

export const { addDiary } = diarySlice.actions;

export default diarySlice.reducer;
