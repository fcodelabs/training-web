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
    { title: "Card Title 1", body: "Some quick example text to build on the card title and make up the bulk of the card's content, Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title 2", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title 3", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title 4", body: "Some quick example text to build on the card title and make up the bulk of the card's content, Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title 5", body: "Some quick example text to build on the card title and make up the bulk of the card's content, Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title 6", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title 7", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title 8", body: "Some quick example text to build on the card title and make up the bulk of the card's content, Some quick example text to build on the card title and make up the bulk of the card's content" },
  ]
}

export const searchCards = (searchText: string, cards: Card[]) => {
    return cards.filter(card=> card.title.toLowerCase().includes(searchText.toLowerCase()));

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