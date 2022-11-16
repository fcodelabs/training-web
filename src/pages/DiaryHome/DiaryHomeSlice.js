import { createSlice } from '@reduxjs/toolkit'

//do not use reducer to store states that are not used globally
export const diaryHomeSlice = createSlice({
  name: 'diaryHome',
  initialState: {
    cards:[]
  },
  reducers: {
    setCards: (state, action) => {
        state.cards=action.payload; 
    },
    getCards(){},
    addCard(action){}
  }
})

// Action creators are generated for each case reducer function
export const {setCards,getCards,addCard} = diaryHomeSlice.actions

export default diaryHomeSlice.reducer