import { all } from "redux-saga/effects";
import { addFormSagas } from "../components/add-form/saga";
import { appSagas } from "./appSaga";

export default function* rootSaga() {
    yield all([...appSagas, ...addFormSagas])
} 