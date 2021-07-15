import {REDUX_SAGA_ADD_CARD,REDUX_SAGA_GET_CARDS}  from "./DiaryType"

export const addCard=(cardDetails)=>{
    console.log("Action Call")
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