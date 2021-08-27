import {
    GET_ALL_DIARY,
    GET_DIARY_DATA_BEGIN,
    SUBMIT_ACTION,
    SUBMIT_FAILED,
    SUBMIT_SUCCESS,
} from "./SubmitDataActionTypes";

export function submitAction(title, description) {
  return ({
    type: SUBMIT_ACTION,
    title,
    description
  })
}

export function fetchDiaryData() {
    return({
        type:GET_DIARY_DATA_BEGIN
    })
}

export function getDiaryDataAction(allDiary) {
    return({
        type:GET_ALL_DIARY,
        payload:allDiary
    })
}

export function submitDataSuccessAction(success) {
    return {
        type: SUBMIT_SUCCESS,
        payload:success,
    };
}

export function loginActionFailure(error) {
    return {
        type: SUBMIT_FAILED,
        error,
    };
}