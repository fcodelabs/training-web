import {createSlice} from '@reduxjs/toolkit';

// Define a type for the slice state
export const signInSlice = createSlice({
    name: 'signIn', // a name used in action type
    initialState: { 
        nickname: '', // nickname of the user as initial state
    },
    reducers: {
        setNickname: (state, action) => {
            state.nickname = action.payload; // set nickname to the payload
        },
    },  

    });

export const {setNickname} = signInSlice.actions; 

export default signInSlice.reducer; 