import { combineReducers } from '@reduxjs/toolkit';
import {cardReducer} from "./cards/cardSlice";

// Combine reducers
const rootReducer = combineReducers({
    card: cardReducer,
});

export default rootReducer;
