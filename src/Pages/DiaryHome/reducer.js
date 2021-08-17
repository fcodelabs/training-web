import {FETCH_ALL_FAIL,FETCH_ALL_START,FETCH_ALL_SUCCESS,ADD_POST_FAIL,ADD_POST_START,ADD_POST_SUCCESS } from "./actionTypes";

let initial_state = {
    itemsArray:[],
    error:null,
    loading:false
};
const reducer = (state=initial_state,action)=>{
    switch(action.type){ 
        case FETCH_ALL_START:
            return {
                ...state,
                loading:true
            };
        case FETCH_ALL_SUCCESS:
            return {
                ...state,
                loading:false,
                itemsArray:action.payload
            };
        case FETCH_ALL_FAIL:
            return {
                ...state,
                error:action.payload,
                loading:false 
            };
        case ADD_POST_START:
            return{
                ...state,
                loading:true

            };
        case ADD_POST_FAIL:
            return {
                ...state,
                error:action.payload,
                loading:false

            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                itemsArray:[...state.itemsArray,action.payload]

            };
        
        default:
            return state;
    }
}
export default reducer;