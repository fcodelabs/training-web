import {SUBMIT_FAILURE, SUBMIT_SUCCESS} from "./homeActionType";

//initial state
const initialState = {
  successMessage: "",
  errorMessage: "",
};

//home reducer
export default function homeReducer(state = initialState, actions) {
  switch (actions.type) {
    case SUBMIT_SUCCESS:
      return {
        ...state,
        successMessage: actions.successMessage,
      };
    case SUBMIT_FAILURE:
      return {
        ...state,
        errorMessage: actions.errorMessage,
      };
    default:
      return initialState;
  }
}
