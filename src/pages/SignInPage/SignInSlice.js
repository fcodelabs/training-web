import { createSlice } from '@reduxjs/toolkit'

export const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    nickname: ""
  },
  reducers: {
    setNickname: (state, action) => {
      state.nickname = action.payload
    }
  }
})


export const { setNickname } = signInSlice.actions

export default signInSlice.reducer