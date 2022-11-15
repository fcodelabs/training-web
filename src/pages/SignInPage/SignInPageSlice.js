import { createSlice } from '@reduxjs/toolkit'

const initialState={
    userName:'',
    disabled:false
}

export const SignInPageSlice=createSlice({
    name:'signInPage',
    initialState,
    reducers:{
        disable:(state)=>{
            state.disabled=true;
        },
        enable:(state)=>{
            state.disabled=false;
        },
        setUserName:(state,action)=>{
            state.userName=action.payload 
        }
    }
  
})
export const {disable,enable,setUserName}=SignInPageSlice.actions
export default SignInPageSlice.reducer;