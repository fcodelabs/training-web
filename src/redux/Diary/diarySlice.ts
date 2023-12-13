import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DiaryCardProps {
    title: string;
    description: string;
    username: string;
}

interface DiaryCardState {
    diaryCardList: DiaryCardProps[];
}

const initialState: DiaryCardState = {
    diaryCardList: [],
};

export const diaryCardSlice = createSlice({
    name: 'diaryCard',
    initialState,
    reducers: {
        addDiaryCard: (state, action: PayloadAction<DiaryCardProps>) => {
            state.diaryCardList.push(action.payload);
        },
        setDiaryCardList: (state, action: PayloadAction<DiaryCardProps[]>) => {
            state.diaryCardList = action.payload;
        },
        fetchDiaryCardList: () => {},
    },
});

const diaryCardActions = diaryCardSlice.actions;
const diaryCardReducer = diaryCardSlice.reducer;
export {diaryCardActions, diaryCardReducer};