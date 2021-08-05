import {ActionTypes} from "../constants";

let id=1;
const diaryCardReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_DIARY_CARD:
            return [
                ...state,
                {
                    id: id++,
                    title: action.payload.title,
                    name: action.payload.name,
                    description: action.payload.description,
                }
            ]
        case ActionTypes.REMOVE_DIARY_CARD:
            return [
                ...state.filter(i=>i.id !== action.payload.id)
            ]
        default:
            return [...state]
    }
}

export default diaryCardReducer