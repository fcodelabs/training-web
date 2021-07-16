import {REDUX_SAGA_ADD_CARD,REDUX_SAGA_GET_CARDS}  from "./diaryType"

export const addCard=(cardDetails)=>{
   return {
    type: REDUX_SAGA_ADD_CARD,
    payload:cardDetails
    }
}

export const getCards=()=>{
    return {
        type: REDUX_SAGA_GET_CARDS
    }
}
