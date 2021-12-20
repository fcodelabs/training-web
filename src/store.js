import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

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

export const store = createStore(reducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);