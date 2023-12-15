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
            // console.log('Adding diary card:', action.payload);
            state.diaryCardList.push(action.payload);                         // add the diary card to the diary card list
            // console.log('Diary card list:', state.diaryCardList);
        },
        setDiaryCardList: (state, action: PayloadAction<DiaryCardProps[]>) => {
            state.diaryCardList = action.payload;                             // set the diary card list to the updated diary card list
        },
        fetchDiaryCardList: () => {},                                         // fetch the diary card list from the database
    },
});

const diaryCardActions = diaryCardSlice.actions;
const diaryCardReducer = diaryCardSlice.reducer;
export {diaryCardActions, diaryCardReducer};