import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  title: "",
  description: "",
  cards: [],
  cardFailures:'',
};
export const DiaryHomeSlice = createSlice({
  name: "diaryHome",
  initialState,
  reducers: {
    durationNow: (state) => {
      state.duration = "1s";
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setCardSuccess: (state, action) => {
      state.cards = action.payload;
    },
    setCardFail:(state,action)=>{
      state.cardFailures=action.payload
    },

    fetchAllCard: (state, action) => {},

    addNewCard: (state, action) => {},
  },
});


export const DiaryHomeActions = DiaryHomeSlice.actions;
export const {setTitle,setDescription,setCardSuccess,setCardFail,fetchAllCard,addNewCard} = DiaryHomeSlice.actions;
export default DiaryHomeSlice.reducer;
