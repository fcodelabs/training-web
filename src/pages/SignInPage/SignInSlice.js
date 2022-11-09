import { createSlice } from '@reduxjs/toolkit'

export const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    nickname: "",
    disabled:true
  },
  reducers: {
    enable: state => {
      state.disabled = false;
    },
    disable: state => {
      state.disabled = true;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { enable, disable, setNickname } = signInSlice.actions

export default signInSlice.reducer