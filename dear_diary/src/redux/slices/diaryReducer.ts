import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DiaryEntry {
    title: string;
    description: string;
    user : string;
}

interface DiaryState{
    entries: DiaryEntry[];
    currentEntry: DiaryEntry
}

const diarySlice = createSlice({
    name: "diary",
    initialState: {
        entries: [],
        currentEntry: {title: "", description: "", user:""}
    }as DiaryState ,
    reducers: {
        getEntry(state,acion){},
        getDiary(state,acion){
            state.entries = acion.payload;
        },
        addEntry(state, action: PayloadAction<DiaryEntry>){
            state.entries.push(action.payload);
        },
        updateCurrentEntry(state, action: PayloadAction<Partial<DiaryEntry>>){
            state.currentEntry = {...state.currentEntry, ...action.payload};
        },
        clearCurrentEntry(state){
            state.currentEntry = {title: "", description: "",user:""};
        }

    }

});

export const {getEntry,getDiary,addEntry,updateCurrentEntry,clearCurrentEntry} = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
