import {SUBMIT_CARD, SUBMIT_FAILURE, SUBMIT_SUCCESS} from "./homeActionType";

export function submitCard(data) {
  return {
    type: SUBMIT_CARD,
    data,
  };
}

export function submitSuccess(successMessage) {
  return {
    type: SUBMIT_SUCCESS,
    successMessage,
  };
}

export function submitFailure(errorMessage) {
  return {
    type: SUBMIT_FAILURE,
    errorMessage,
  };
}
