import {DIARY_GET, DIARY_POST, DIARY_SUCCESS} from "./actionTypes";

const initState = {
    diaryArr: [],
    diaryCardsLoading: true
}

export default function diaryReducer(state = initState, action) {

    switch (action.type) {
        case DIARY_SUCCESS: {
            return {
                ...state,
                diaryArr: action.diaryItems,
                diaryCardsLoading: false
            }
        }
        default: {
            return state;
        }
    }
}