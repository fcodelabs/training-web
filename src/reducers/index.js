import { combineReducers } from "redux";
import cards from './cards';
import addCards from "./addCard";

const rootReducer = combineReducers({
    cards:cards,
    addCards,
    

});

export default rootReducer;


