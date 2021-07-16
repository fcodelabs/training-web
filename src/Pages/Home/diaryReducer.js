import {GET_CARDS} from "../Home/diaryType"

const initialState ={
    cards:[],
}

const diaryReducer = (state=initialState,action)=>{
    switch (action.type) {
        case GET_CARDS:
            return{
                ...state,
                cards:action.payload
            }
        default:
            return state   
    }    
}

export default diaryReducer