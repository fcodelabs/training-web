import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Card={
    title: string;
    body: string
}

type initialStateType={
    cards: Card[];
}
const initialState: initialStateType={
    cards: [
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content, Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
  ]
}

const diaryCardSlice = createSlice({
    name: "diaryCard",
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload);
        },
    },
});

export const { addCard } = diaryCardSlice.actions;

export default diaryCardSlice.reducer;