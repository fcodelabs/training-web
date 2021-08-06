import diaryCardReducer from './diaryCard'
import loginReducer from "./login";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    diaryCards:diaryCardReducer,
    login: loginReducer
})

export default rootReducer