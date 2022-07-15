import { createSlice } from "@reduxjs/toolkit";

const diarySlice = createSlice({
    name: "diaryItems",
    initialState: {
        diaryItems: [
            {
                title: "Test Title",
                userName: "Name",
                description:
                    "This is a text description for the card. It is hard coded. It is supposed to display only 100 characters. If number of characters is more than that the excess characters should be hidden till you click the show more button.",
                backgroundColor: "#B3E9FE",
            },
        ],
        user: "",
    },
    reducers: {
        addCard: (state, action) => {
            const data = action.payload;
            state.diaryItems.push({
                title: data.title,
                description: data.description,
                userName: data.userName,
                backgroundColor: data.backgroundColor,
            });
        },
        addUserName: (state, action) => {
            const data = action.payload;
            state.user = data;
        },
    },
});
export const { addCard } = diarySlice.actions;
export const { addUserName } = diarySlice.actions;
export const selectDiaryItems = (state) => state.diaryItems.diaryItems;
export const selectUserName = (state) => state.diaryItems.user;
export default diarySlice;
