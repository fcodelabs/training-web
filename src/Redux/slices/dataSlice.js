import { createSlice } from "@reduxjs/toolkit";
const ONSUBMIT = 'onsubmit';

// const initialState = {
//   cards: [],
// }

// const homeSlice = createSlice({
//   name: "home",
//   initialState,
//   reducers: {
//       addCard(state, action) {
//           const tempCards = [...state.cards];
//           tempCards.push(action.payload);
//           state.cards = tempCards;
//       }
//   }
// });

//



const initialState = {
   
   diaryCards :[],
};

// const dataReducer = (e, state = initState, action) => {
//     if (action.type === ONSUBMIT) {
//       return {
//         ...state,
//         title : e.target.title.value,
//         description : e.target.description.value
//       };
//     }
    
//   };

const dataSlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
      addCard(state, action) {
          const tempCard = [...state.diaryCards];
          
          tempCard.push(action.payload);
          
          state.diaryCards = tempCard;
          
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