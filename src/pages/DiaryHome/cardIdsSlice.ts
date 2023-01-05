import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface CardIdState {
    value: string[];
}

const initialState: CardIdState = {
    value: []
};

export const cardIdsSlice = createSlice({
    name: 'cardIds',
    initialState,
    reducers: {
        addId: (state, action: PayloadAction<string>) => {
             state.value.push(action.payload)
        },
    },
})

export const { addId } = cardIdsSlice.actions

export default cardIdsSlice.reducer