import { createStore } from "redux";

const initialState = {
    visible: false,
    cards: [
        {
            title: "",
            description: ""
        }
    ],

}

const reducerFunction = (state = initialState, action) => {

    switch (action.type) {
        case 'addNew':
            let newData = { title: action.sendTitle, description: action.sendDescription }
            return {
                cards: [...state.cards, newData],
            }
        default:
            return state

    }
}

const store = createStore(reducerFunction);

export default store;