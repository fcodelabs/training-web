import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
    userId: number;
    userName: string;
    isLogged: boolean;
}

const initialState: initialStateType = {
    userId: 0,
    userName: localStorage.getItem("userName") || "",
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
        userLoggedIn: (state, action:PayloadAction<string>) => {
            state.isLogged = true;
            state.userName = action.payload;
            localStorage.setItem("userName", action.payload);
            localStorage.setItem("isLogged", "true");
        }
    },
});

export const { setUserId, setUserName, userLoggedIn } = userSlice.actions;
export default userSlice.reducer;
