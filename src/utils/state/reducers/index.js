import { combineReducers } from "redux";
import cardReducer from './cardReducer';

const reducers = combineReducers({
    card: cardReducer
});

export default reducers;