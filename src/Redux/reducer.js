import { createStore } from "redux";

const initialState = {
  cards: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_NEW") {
    let newCard = {
      id: action.id,
      title: action.title,
      description: action.description,
    };
    return {
      cards: [...state.cards, newCard],
    };
  } else {
    return state;
  }
};

const store = createStore(reducer);

export default store;
