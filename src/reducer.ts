import { createReducer, createAction } from "@reduxjs/toolkit";

export interface State {
  user: string;
  cards: {
    name: string;
    title: string;
    description: string;
    created: string;
  }[];
}

const addCard = createAction<{
  name: string;
  title: string;
  description: string;
  created: string;
}>("addCard");
const addUser = createAction<string>("addUser");
const getCards =
  createAction<
    { name: string; title: string; description: string; created: string }[]
  >("getCards");
const addCards =
  createAction<
    { name: string; title: string; description: string; created: string }[]
  >("addCards");

export const reducer = createReducer(
  { cards: [], user: "" } as State,
  (builder) => {
    builder
      .addCase(addCard, (state, action) => {
        state.cards.push(action.payload);
      })
      .addCase(addUser, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getCards, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(addCards, (state, action) => {
        state.cards = action.payload;
      });
  }
);
