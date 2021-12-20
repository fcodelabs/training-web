import { combineReducers } from "redux";
import cards from './cards';
import addCards from "./addCards";

const rootReducer = combineReducers({
    cards:cards,
    addCards:addCards,
    

});

export default rootReducer;


