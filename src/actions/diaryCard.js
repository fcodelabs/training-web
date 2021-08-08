import { ActionTypes } from '../config/constants'

export const addDiaryCard = ({ title, name, description }) => ({
  type: ActionTypes.ADD_DIARY_CARD,
  payload: {
    title: title,
    name: name,
    description: description
  }
})

export const upsertDiaryCard = ({ id, title, name, description }) => ({
  type: ActionTypes.UPSERT_DIARY_CARD,
  payload: {
    id: id,
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

export const fetchDiaryCards = () => ({
  type: ActionTypes.REQUEST_ALL_CARDS
})

export const loadAllDiaryCards = (diaryCardsArray) => ({
  type: ActionTypes.LOAD_ALL_DIARY_CARDS,
  payload: diaryCardsArray
})
