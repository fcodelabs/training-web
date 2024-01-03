import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IDiaryCardProps {
    title: string;
    description: string;
    username: string;
}


interface IDiaryCardState {
    diaryCardList: IDiaryCardProps[];
}

const initialState: IDiaryCardState = {
    diaryCardList: [],
};

export const diaryCardSlice = createSlice({
    name: 'diaryCard',
    initialState,
    reducers: {
        addDiaryCard: (state, action: PayloadAction<IDiaryCardProps>) => {
            
            state.diaryCardList.push(action.payload);                         // add the diary card to the diary card list
            
        },
        setDiaryCardList: (state, action: PayloadAction<IDiaryCardProps[]>) => {
            state.diaryCardList = action.payload;                             // set the diary card list to the updated diary card list
        },
        fetchDiaryCardList: () => {},                                         // fetch the diary card list from the database
    },
});

const diaryCardActions = diaryCardSlice.actions;
const diaryCardReducer = diaryCardSlice.reducer;
export {diaryCardActions, diaryCardReducer};