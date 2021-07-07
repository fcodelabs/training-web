import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notes_reducer from "./reducers/notesReducer"

export const store = createStore(notes_reducer,composeWithDevTools());