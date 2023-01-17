import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: ''
    },
    reducers: {
        set: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        clearUser: (state) => {
            state.value = ''
        },
    },
})

export const { set, clearUser  } = userSlice.actions

export default userSlice.reducer