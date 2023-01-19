import { combineReducers } from "redux";
import diaryRedux from "../Pages/DiaryHome/diaryRedux";
import userRedux from "../Pages/SignInPage/userRedux";

const rootReducer = combineReducers({
  diary: diaryRedux,
  user: userRedux,
});

export default rootReducer;
