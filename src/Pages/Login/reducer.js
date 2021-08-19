import { ActionTypes } from '../../utils/actionTypes'

const reducer = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        username: action.payload.username,
        isLoggedIn: true
      }
    case ActionTypes.LOGOUT:
      return {
        isLoggedIn: false
      }

    case ActionTypes.SET_NAME:
      return {
        isLoggedIn: false,
        username: action.payload
      }
    default:
      return state
  }
}

export default reducer
