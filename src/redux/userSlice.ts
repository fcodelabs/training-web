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
        clear: (state) => {
            state.value = ''
        },
    },
})

export const { set,clear } = userSlice.actions

export default userSlice.reducer