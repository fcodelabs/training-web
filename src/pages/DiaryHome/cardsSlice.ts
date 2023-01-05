import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Card} from './card'

interface CardsState {
    loading: boolean;
     value:Card[]
}

const initialState: CardsState = {
    loading: false,
     value: []
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        fetchCardList(state) {
            state.loading = true;
        },
        fetchCardListSuccess(state, action: PayloadAction<Card[]>) {
            console.log(action.payload)
            state.loading = false;
            state.value = action.payload;
        },
        fetchCardListFailed(state) {
            state.loading = false;
        },
    },
})

export const { fetchCardList, fetchCardListSuccess, fetchCardListFailed } = cardsSlice.actions

export default cardsSlice.reducer