//initial state
import {LOGIN_FAILURE, LOGIN_SUCCESS} from "./loginActionType";

//initial state
const initialState = {
  name: null,
  successMessage: null,
  errorMessage: null,
};

//login reducer
export default function loginReducer(state = initialState, actions) {
  switch (actions.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: actions.name,
        successMessage: actions.successMessage,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: actions.errorMessage,
      };
    default:
      return initialState;
  }
}
