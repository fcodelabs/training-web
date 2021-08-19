import { ActionTypes } from '../../utils/actionTypes'

let id = 0
const initialState = { diaryCards: [] }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DIARY_CARD: {
      state.diaryCards = [
        ...state.diaryCards,
        {
          id: id++,
          title: action.payload.title,
          name: action.payload.name,
          description: action.payload.description
        }
      ]
      return state
    }
    case ActionTypes.UPSERT_DIARY_CARD: {
      state.diaryCards = [
        ...state.diaryCards.filter(i => i.id !== action.payload.id),
        {
          id: id++,
          title: action.payload.title,
          name: action.payload.name,
          description: action.payload.description
        }
      ]
      return state
    }
    case ActionTypes.REMOVE_DIARY_CARD: {
      state.diaryCards = [
        ...state.diaryCards.filter(i => i.id !== action.payload.id)
      ]
      return state
    }
    case ActionTypes.LOAD_ALL_DIARY_CARDS:
      if (Array.isArray(action.payload)) {
        state.diaryCards = action.payload
      }
      return state
    default:
      return state
  }
}

export default reducer
