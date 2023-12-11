import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Card = {
    id: string
    title: string;
    body: string;
};

type SubmitCard = {
    title: string;
    body: string;
};

type InitialStateType = {
    cards: Card[];
    isloading: boolean;
};

const initialState: InitialStateType = {

    cards: [],
    isloading: true,
};

export const searchCards = (searchText: string, cards: Card[]) => {
    return cards.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase()));
};

const diaryCardSlice = createSlice({
    name: "diaryCard",
    initialState: initialState,
    reducers: {
        addCardByUser: (state, action: PayloadAction<SubmitCard>) => {
            //
        },
        addCard: (state, action: PayloadAction<Card>) => {
            const existingCard = state.cards.find((card) => card.id === action.payload.id);
            if (!existingCard) {
                state.cards.push(action.payload);
            }
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload);
        },
        editCard: (state, action: PayloadAction<Card>) => {
            state.cards = state.cards.filter((card) => card.id != action.payload.id);
            console.log(action.payload, state.cards);
            state.cards.push(action.payload);
        },
        addCards: (state, action: PayloadAction<Card[]>) => {
            state.cards = action.payload;
            state.isloading = false;
        }
    },
});

export const { deleteCard, editCard, addCards, addCard, addCardByUser } = diaryCardSlice.actions;
export const fetchCards = createAsyncThunk('diaryCard/fetchCards', () => ({}));
export default diaryCardSlice.reducer;
