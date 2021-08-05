import {ActionTypes} from "../constants";

export const addDiaryCard = (title, name, description) => ({
    type: ActionTypes.ADD_DIARY_CARD,
    payload: {
        title: title,
        name: name,
        description: description
    }
})

export const removeDiaryCard = (id) => ({
    type: ActionTypes.REMOVE_DIARY_CARD,
    payload: {
        id: id
    }
})

