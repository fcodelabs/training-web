import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    userId: number;
    userName: string;
}

const initialState: initialStateType = {
    userId: 0,
    userName: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<number>) => {
            state.userId = action.payload;
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
    },
});

export const { setUserId, setUserName } = userSlice.actions;
export default userSlice.reducer;
