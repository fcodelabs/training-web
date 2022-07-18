import { createSlice } from "@reduxjs/toolkit";

const diarySlice = createSlice({
    name: "diary",
    initialState: {
        diaryItems: [],
    },
    reducers: {
        addCard: (state, action) => {
            console.log(action.payload);
            let cards = action.payload;
            state.diaryItems = [...cards];

            //     {
            //         title: "Test Title",
            //         userName: "Name",
            //         description:
            //             "This is a text description for the card. It is hard coded. It is supposed to display only 100 characters. If number of characters is more than that the excess characters should be hidden till you click the show more button.",
            //         backgroundColor: "#B3E9FE",
            //     },
            // ];
            // cards.map((card) =>
            //     state.diaryItems.push({
            //         title: card.title,
            //         description: card.description,
            //         userName: card.userName,
            //         backgroundColor: card.backgroundColor,
            //     })
            // );
        },
        getDiaries: () => {},
    },
});
export const diaryActions = diarySlice.actions;
export default diarySlice;
