import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface DiaryState {
    diaryEntries: DiaryEntry[];
    error: boolean;
    submitText: string;
    description: string;
    submitted: boolean;
}

const initialState: DiaryState = {
    diaryEntries: [],
    error: false,
    submitText: '',
    description: '',
    submitted: false,
  }

interface DiaryEntry {
    title: string;
    username: string;
    description: string;
  };

const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        addDiaryEntry: (state, action: PayloadAction<DiaryEntry>) => {
            state.diaryEntries.push(action.payload);
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.error = action.payload;
        },
        setSubmitText: (state, action: PayloadAction<string>) => {
            state.submitText = action.payload;
          },
          setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
          },
          setSubmitted: (state, action: PayloadAction<boolean>) => {
            state.submitted = action.payload;
    },
    
}})

export const { addDiaryEntry, setError, setSubmitText, setDescription, setSubmitted} = diarySlice.actions;
export default diarySlice.reducer;