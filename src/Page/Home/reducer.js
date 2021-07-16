import { addCard, saveCards } from "./actionTypes";

let lastId = 0;
const initialState = {
  cards: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === addCard) {
    let newCard = {
      id: ++lastId,
      title: action.title,
      subtitle: action.subtitle,
      description: action.description,
    };
    return {
      cards: [...state.cards, newCard],
    };
  } else if (action.type === saveCards) {
    return { ...state, cards: action.payload };
  } else {
    return state;
  }
};

export default reducer;
