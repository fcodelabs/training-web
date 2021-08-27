import {GET_ALL_DIARY, SUBMIT_ACTION, SUBMIT_FAILED, SUBMIT_SUCCESS} from "./SubmitDataActionTypes";

const initialState = {
    allDiary: [],
    title: "",
    description: "",
    isLoading: false,
    error:null
}

function submitDataReducer(sate = initialState, actions) {
    switch (actions.type) {
        case SUBMIT_ACTION:
            return {
                ...sate,
                title: actions.title,
                description: actions.description,
                isLoading: true
            }
        case GET_ALL_DIARY:
            return {
                ...sate,
                isLoading: false,
                allDiary: actions.payload
            }
        case SUBMIT_SUCCESS:
            return {
                ...sate,
                title: actions.title,
                description:actions.description
            }
        case SUBMIT_FAILED:
            return {
                ...sate,
                error: actions.payload,
                isLoading: false
            }
        default :
            return sate;
    }
}

export default submitDataReducer;