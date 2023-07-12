import { createSlice} from '@reduxjs/toolkit';

//create interface to accept string values to state user
interface UserState {
    user: string,
    cards: CardData[];
};

interface CardData {
  id:string
  user: string;
  title: string;
  description: string;
}
  
const initialState: UserState = { user: "demo", cards:[] };

//create a slice to save the user state
const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    saveUser(state, action) {
      state.user = action.payload;
    },
    addCard(state, action) {
      state.cards.push(action.payload)
    },
    getCards(state, action){
      state.cards = action.payload;
    },
    saveCard(state, action){
    },
    requestCards(){

    }
  }
});

const cardReducer = cardSlice.reducer;
const cardsActions = cardSlice.actions;

export {cardReducer, cardsActions};
