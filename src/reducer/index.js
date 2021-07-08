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
        case 'createNew':
            let newData = { title: action.sendTitle, description: action.sendDescription }
            return {
                ...state,
                cards: [...state.cards, newData]
            }
        default:
            return state

    }
}

const reducer = createStore(reducerFunction);

export default reducer;