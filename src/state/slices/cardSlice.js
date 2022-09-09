import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCards(){},
    postCard(){},
    setCards:(state,action)=>{
      let cards =action.payload.res;
      console.log(cards)
      return cards
    }
  },
})

// Action creators are generated for each case reducer function
export const { getCards,setCards,postCard } = cardSlice.actions

export default cardSlice.reducer