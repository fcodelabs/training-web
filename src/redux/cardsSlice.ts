import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        value: [{
            title: '',
            subtitle: '',
            description: '',
            color: ''
        }]
    },
    reducers: {
        add: (state, action: PayloadAction<{
            title: string,
            subtitle: string,
            description: string,
            color: string
        }
        >) => {
            state.value.push(action.payload)
        },
    },
})

export const { add } = cardsSlice.actions

export default cardsSlice.reducer