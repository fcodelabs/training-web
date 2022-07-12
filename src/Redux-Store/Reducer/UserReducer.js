import * as types from "../Actions/ActionType";

//initiating the state
const initialAuthState = {

    auth: [],
    error: null,
    loading: false

}
//initializing the user Reducer with action types
const userReducer = (state = initialAuthState, action) => {
    console.log(action.payload)
    switch (action.type) {

        case types.SIGN_IN_START:
            return {
                ...state,
                auth: action.payload,
                loading: true,
            };
        case types.SIGN_IN_SUCCESS:
            return {
                ...state,        
                auth: action.payload,        
                loading: false
            };

        case types.SIGN_IN_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default userReducer;