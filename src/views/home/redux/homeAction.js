import {
  FETCH_DATA,
  FETCH_DATA_CALLER,
  IS_LOADING,
  SUBMIT_CARD,
  SUBMIT_FAILURE,
  SUBMIT_SUCCESS,
} from "./homeActionType";

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

export function fetchDataCaller() {
  return {
    type: FETCH_DATA_CALLER,
  };
}

export function fetchData(data) {
  return {
    type: FETCH_DATA,
    data,
  };
}

export function setLoading(loading) {
  return {
    type: IS_LOADING,
    loading,
  };
}
