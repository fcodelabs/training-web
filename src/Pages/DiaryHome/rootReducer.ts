import { combineReducers } from "redux";
import diaryRedux from "./diaryRedux";
import userRedux from "./userRedux";

const rootReducer = combineReducers({
  diary: diaryRedux,
  user: userRedux,
});

export default rootReducer;
