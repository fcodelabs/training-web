import { createSlice } from "@reduxjs/toolkit";
import allDataSaga from "../saga/dataSaga";



const initialState = {
   
   diaryCards :[],
};



const dataSlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
      addCard(state, action) {},
          //const tempCard = [...state.diaryCards];
          
          //tempCard.push(action.payload);
          
          //state.diaryCards = tempCard;
          getCards() {},
          saveCards(state, action) {
           // console.log(action.payload)
            state.diaryCards = action.payload;
          
          }
  }
});

//Actions
export const dataActions = dataSlice.actions;

//Selectors
export const selectCard = (state) => state.dataReducer.diaryCards;


//Reducer
const dataReducer = dataSlice.reducer;
  



  export default dataReducer;