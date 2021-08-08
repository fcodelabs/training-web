import { ActionTypes } from '../config/constants'

export const login = (username) => ({
  type: ActionTypes.LOGIN,
  payload: {
    username: username
  }
})

export const logout = () => ({
  type: ActionTypes.LOGIN,
  payload: {}
})

export const randomName = () => ({
  type: ActionTypes.RANDOM_NAME,
  payload: {}
})
export const setName = (name) => ({
  type: ActionTypes.SET_NAME,
  payload: name
})
