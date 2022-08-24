import { createReducer, createAction } from "@reduxjs/toolkit";

export interface State {
  user: string;
  cards: { name: string; title: string; description: string }[];
}

const addCard = createAction<{
  name: string;
  title: string;
  description: string;
}>("addCard");
const addUser = createAction<string>("addUser");

export const reducer = createReducer(
  { cards: [], user: "" } as State,
  (builder) => {
    builder
      .addCase(addCard, (state, action) => {
        state.cards.push(action.payload);
      })
      .addCase(addUser, (state, action) => {
        state.user = action.payload;
      });
  }
);
