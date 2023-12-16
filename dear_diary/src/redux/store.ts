import { configureStore , Middleware} from "@reduxjs/toolkit";
import {diaryReducer} from "./slices/diaryReducer";
import { userReducer } from "./slices/userSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer:{
        user: userReducer,
        diary: diaryReducer,
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware as Middleware),
    
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
