import diaryCardReducer from './diaryCard'

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    diaryCards:diaryCardReducer,
})

export default rootReducer