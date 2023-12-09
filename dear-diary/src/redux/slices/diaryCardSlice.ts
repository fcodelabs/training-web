import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import db from "../../utilities/firebaseIntegration";

type Card = {
    id:string
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

export const fetchCards = createAsyncThunk('diaryCard/fetchCards', async () => {
    const cardsCol = collection(db, 'diary-cards');
    const cardsSnapshot = await getDocs(cardsCol);
    const cardsList = cardsSnapshot.docs.map(doc => {
        const cardData = doc.data() as Card;
        cardData.id = doc.id;
        return cardData;
    });
    return cardsList;
});


export const addCardToDb = createAsyncThunk('diaryCard/addCardToDb', async (card: SubmitCard) => {
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
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload);
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload);
        },
        editCard: (state, action: PayloadAction<Card>) => {
            state.cards= state.cards.filter((card) => card.id !== action.payload.id);
            state.cards.push(action.payload);
        },
    },
    extraReducers: (builder) => {
 
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            const payload = action.payload;
            state.cards = payload;
            state.isloading = false;
        });
    },
});

export const { deleteCard, editCard } = diaryCardSlice.actions;
export default diaryCardSlice.reducer;
