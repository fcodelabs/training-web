import { createSlice } from '@reduxjs/toolkit'

//do not use reducer to store states that are not used globally
export const diaryHomeSlice = createSlice({
  name: 'diaryHome',
  initialState: {
    cards:[],
    error:""
  },
  reducers: {
    getCards:()=>{},
    getCardsSuccess: (state, action) => {
      state.cards=action.payload; 
    },
    getCardsFailed:(state, action)=>{
      state.error=action.payload
    },
    addCard:(action)=>{},
    addCardFailed:(state, action)=>{
      state.error=action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {getCards,getCardsSuccess,getCardsFailed,addCard,addCardFailed} = diaryHomeSlice.actions

export default diaryHomeSlice.reducer