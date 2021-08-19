import { ActionTypes } from '../../utils/actionTypes'

export const startLoading = () => ({
  type: ActionTypes.LOADING_START,
  payload: {}
})
export const endLoading = () => ({
  type: ActionTypes.LOADING_END,
  payload: {}
})
