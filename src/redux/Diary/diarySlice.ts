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
            console.log('Adding diary card:', action.payload);
            state.diaryCardList.push(action.payload);
            console.log('Diary card list:', state.diaryCardList);
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