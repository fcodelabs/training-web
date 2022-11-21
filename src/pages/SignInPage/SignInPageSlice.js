import { createSlice } from '@reduxjs/toolkit'

const initialState={
    userName:''
}

export const SignInPageSlice=createSlice({
    name:'signInPage',
    initialState,
    reducers:{
        setUserName:(state,action)=>{
            state.userName=action.payload 
        }
    }
  
})
export const {setUserName}=SignInPageSlice.actions
export default SignInPageSlice.reducer;