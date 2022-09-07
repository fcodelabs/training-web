import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser:(state,action)=>{
        state.name=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions

export default counterSlice.reducer