import { SUBMIT_BUTTON_CLICK } from "../actions/type";

export default function(state = null,action){
     switch(actions.type){
        case SUBMIT_BUTTON_CLICK:
            return action.payload;
            break;

     }
     return state
}