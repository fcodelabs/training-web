import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {value:{username: ""}}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        login:(state,action) =>{
            state.value = action.payload;  //when the login functionality is clicked
        },
        logout:(state) =>{
            state.value = initialState.value;
        }
    }
})

export const {login, logout} = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});