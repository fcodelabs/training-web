import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Card {
    title: string;
    subtitle: string;
    description: string;
    color: string;
}

interface CardsState {
     value:Card[]
}

const initialState: CardsState = {
     value: []
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Card>) => {
             state.value.push(action.payload)
        },
    },
})

export const { add } = cardsSlice.actions

export default cardsSlice.reducer