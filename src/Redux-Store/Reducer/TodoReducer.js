import * as types from "../Actions/ActionType";

//initiating the state
const initialState = {
   
    todos : [],
    error: null,
    loading : false

}
//initializing the TODO Reducer with action types
const todoReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch(action.type){
       
        case types.ADD_TODO_START:
        case types.GET_TODO_START:
        
            return {
                ...state,
                loading:true,
            };
       
        case types.ADD_TODO_SUCCESS:
        case types.GET_TODO_SUCCESS:   
       
            return{
                ...state,
                todos: action.payload,
                loading : false
            };
        
        case types.ADD_TODO_FAIL:
        case types.GET_TODO_FAIL:
       
            return {
                ...state,
                error:action.payload,               
            };    

        case types.UPDATE_TODOS:
            return{
                ...state,
                todos:action.payload
            }  
        default:
            return state;
    }
}

export default todoReducer;