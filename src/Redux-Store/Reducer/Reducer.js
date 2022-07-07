import { ADD_TODO } from "../Actions/ActionType";

//initiating the state
const initialState = {
    todos : [],
}
//initializing the Reducer with action types
const Reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            };
        
        default:
            return state;
    }
}

export default Reducer;