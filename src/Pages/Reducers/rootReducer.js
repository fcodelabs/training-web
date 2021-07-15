import notesReducer from './notes.reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    notes: notesReducer,
})

export default rootReducer;