import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Card} from './card'

interface CardState {
    loading: boolean;
    value:string
}

const initialState: CardState = {
    loading: false,
    value: ''
};

export const addCardSlice = createSlice({
    name: 'addCard',
    initialState,
    reducers: {
        addCard(state, action: PayloadAction<Card>) {
            state.loading = true;
        },
        addCardSuccess(state, action: PayloadAction<string>) {
            state.loading = false;
            state.value = action.payload;
        },
        addCardFailed(state) {
            state.loading = false;
        },
    },
})

export const { addCard, addCardSuccess, addCardFailed } = addCardSlice.actions

export default addCardSlice.reducer