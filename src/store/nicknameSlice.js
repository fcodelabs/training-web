import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nickname: "",
}

export const nicknameSlice = createSlice({
  name: 'nickname',
  initialState,
  reducers: {
    setNickname: (state,action) => {
      state.nickname = action.payload;
    },
    removeNickname: (state) => {
      state.nickname = "";
    },
  },
})

export const { setNickname, removeNickname } = nicknameSlice.actions

export default nicknameSlice.reducer