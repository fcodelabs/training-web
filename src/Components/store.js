import { createStore } from 'redux';

const initialState = {
    title : '',
    description : '',
    cards: []
};

function reducer(state = initialState, action){
    switch(action.type){
        case "titleChanged":
            return { ...state, title : action.payload };
        case "descriptionChanged":
            return {...state, description : action.payload};
        case "newCard":
            return {...state, cards: action.payload};

        default:
            return state;
    }
}

//selectors
export const getTitle = (state) => state.title;
export const getDescription = (state) => state.description;
export const getCards = (state) => state.cards;

export const store = createStore(reducer);