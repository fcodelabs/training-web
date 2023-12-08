import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, collection, getDocs, DocumentData, addDoc } from 'firebase/firestore/lite';
import db from "../../utilities/firebaseIntegration";

type Card = {
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

export const fetchCards = createAsyncThunk('diaryCard/fetchCards', async () => {
    const cardsCol = collection(db, 'diary-cards');
    const cardsSnapshot = await getDocs(cardsCol);
    const cardsList = cardsSnapshot.docs.map(doc => doc.data() as Card);
    return cardsList;
});

export const addCardToDb = createAsyncThunk('diaryCard/addCardToDb', async (card: Card) => {
    const cardsCol = collection(db, 'diary-cards');
    await addDoc(cardsCol, card);
    return card;
});

export const searchCards = (searchText: string, cards: Card[]) => {
    return cards.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase()));
};

const diaryCardSlice = createSlice({
    name: "diaryCard",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addCardToDb.fulfilled, (state, action) => {
            const payload = action.payload;
            state.cards.push(payload);
            });
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            const payload = action.payload;
            state.cards = payload;
            state.isloading = false;
        });
    },
});


export default diaryCardSlice.reducer;
