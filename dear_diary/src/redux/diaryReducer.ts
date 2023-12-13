import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DiaryEntry {
    title: string;
    description: string;
}

interface DiaryState{
    entries: DiaryEntry[];
    currentEntry: DiaryEntry
}

const diarySlice = createSlice({
    name: "diary",
    initialState: {
        entries: [],
        currentEntry: {title: "", description: ""}
    }as DiaryState ,
    reducers: {
        addEntry(state, action: PayloadAction<DiaryEntry>){
            state.entries.push(action.payload);
        },
        updateCurrentEntry(state, action: PayloadAction<Partial<DiaryEntry>>){
            state.currentEntry = {...state.currentEntry, ...action.payload};
        },
        clearCurrentEntry(state){
            state.currentEntry = {title: "", description: ""};
        }

    }

});

export const {addEntry,updateCurrentEntry,clearCurrentEntry} = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
