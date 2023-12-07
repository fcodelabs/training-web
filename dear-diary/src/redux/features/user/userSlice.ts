import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    userId: number;
    userName: string;
    isLogged: boolean;
}

const initialState: initialStateType = {
    userId: 0,
    userName: "",
    isLogged: false,
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
        userLoggedIn: (state) => {
            state.isLogged = true;
        }
    },
});

export const { setUserId, setUserName, userLoggedIn } = userSlice.actions;
export default userSlice.reducer;
