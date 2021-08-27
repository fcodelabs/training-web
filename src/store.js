import { combineReducers, createStore } from "redux";
// import diaryReducer from "./pages/diaryHome/redux/diaryReducer";
import loginReducer from "./pages/landingPage/redux/loginReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    // diary: diaryReducer
})

export default createStore(rootReducer)