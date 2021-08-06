import diaryCardReducer from './diaryCard'
import loginReducer from "./login";
import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
    diaryCards:diaryCardReducer,
    login: loginReducer,
    firebase: firebaseReducer
})

export default rootReducer