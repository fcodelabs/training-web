import { createSlice } from "@reduxjs/toolkit";

export interface State {
  user: string;
  cards: {
    name: string;
    title: string;
    description: string;
    created: string;
  }[];
}

const reducer = createSlice({
  name: "reducer",
  initialState: { user: "", cards: [] } as State,
  reducers: {
    addUser(state, action) {
      state.user = action.payload.payload;
    },
    addCards(state, action) {
      state.cards = action.payload.payload;
    },
  },
});

export const { addUser, addCards } = reducer.actions;
export default reducer.reducer;
