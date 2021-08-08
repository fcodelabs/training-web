import { ActionTypes } from '../config/constants'

export const startLoading = () => ({
  type: ActionTypes.LOADING_START,
  payload: {}
})
export const endLoading = () => ({
  type: ActionTypes.LOADING_END,
  payload: {}
})
