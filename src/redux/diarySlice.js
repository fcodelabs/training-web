import { createSlice } from "@reduxjs/toolkit";

const diarySlice = createSlice({
    name: "diary",
    initialState: {
        diaryItems: [],
    },
    reducers: {
        addCard: (state = [], action) => {
            const cards = action.payload;
            cards.map((card) =>
                state.diaryItems.push({
                    title: card.title,
                    description: card.description,
                    userName: card.userName,
                    backgroundColor: card.backgroundColor,
                })
            );
        },
        getDiaries: () => {},
    },
});
export const diaryActions = diarySlice.actions;
export default diarySlice;
