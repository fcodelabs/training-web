import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userStateType } from "../../utilities/types";


const initialState: userStateType = {
    userName: localStorage.getItem("userName") || "",
    isLogged: localStorage.getItem("isLogged") === "true" ? true : false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            localStorage.setItem("userName", action.payload);
            localStorage.setItem("isLogged", "true");
        },
        userLoggedIn: (state, action: PayloadAction<string>) => {
            state.isLogged = true;
            state.userName = action.payload;    
        }
    },
});

export const { setUser, userLoggedIn } = userSlice.actions;

export default userSlice.reducer;
