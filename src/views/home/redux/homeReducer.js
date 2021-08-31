import {FETCH_DATA, IS_LOADING, SUBMIT_FAILURE, SUBMIT_SUCCESS,} from "./homeActionType";

//initial state
const initialState = {
  data: [],
  loading: true,
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
    case FETCH_DATA:
      return {
        ...state,
        data: actions.data,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: actions.loading,
      };
    default:
      return state;
  }
}
