import {ActionTypes} from "../constants";

export const login = (username) => ({
    type: ActionTypes.LOGIN,
    payload: {
        username: username,
    }
})

export const logout = () => ({
    type: ActionTypes.LOGIN,
    payload: {
    }
})