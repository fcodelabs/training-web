import { combineReducers } from "redux";
import {cardReducer} from '../components/add-form/redux/reducer';

const reducers = combineReducers({
    card: cardReducer
});

export default reducers;