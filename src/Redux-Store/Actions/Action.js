import * as types from "./ActionType"
//Actions
export const Add_Todo_Start = (todos) => ({
    type: types.ADD_TODO_START,
    payload: todos,
})

export const Add_Todo_Success = () => ({
    type: types.ADD_TODO_SUCCESS,
   
});

export const Add_Todo_Fail = (error) => ({

    type: types.ADD_TODO_FAIL,
    payload: error,

})

export const get_Todo_Start = () => ({    
        type: types.GET_TODO_START,    
})

export const get_Todo_Success = (todos) => ({
    type: types.GET_TODO_SUCCESS,
    payload: todos,
});

export const get_Todo_Fail = (error) => ({
    type: types.GET_TODO_FAIL,
    payload: error,
})

export const SignIn_Start = (auth) => ({
    type: types.SIGN_IN_START,
    payload: auth,
})

export const SignIn_Success = (auth) => ({
    type: types.SIGN_IN_SUCCESS,
    payload: auth,
});

export const SignIn_Fail = (error) => ({
    type: types.SIGN_IN_FAIL,
    payload: error,
})

export const update_Todos = (todos) =>({
    type: types.UPDATE_TODOS,
    payload: todos
})