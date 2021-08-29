import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS} from "./loginActionType";

export function login(name) {
  return {
    type: LOGIN,
    name,
  };
}

export function loginSuccess(name, successMessage) {
  return {
    type: LOGIN_SUCCESS,
    name,
    successMessage,
  };
}

export function loginFailure(errorMessage) {
  return {
    type: LOGIN_FAILURE,
    errorMessage,
  };
}
