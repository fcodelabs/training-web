import { createStore } from "redux";

const initialState = {
  visible: false,
  cards: [],
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case "createNew":
      let newCard = {
        title: action.sendTitle,
        description: action.sendDescription,
      };
      return {
        ...state,
        cards: [...state.cards, newCard],
      };
    default:
      return state;
  }
};

const reducer = createStore(reducerFunction);

export default reducer;
