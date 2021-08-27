import { DIARY_GET, DIARY_POST } from "./diaryActionsTypes";
import DiaryState from "../SuperData/SuperDiaryState";

const initState:DiaryState = {
    diaryCardsLoading:true,
    diaryCardPostLoading:true,
    diaryData:[]
}

export default function diaryReducer(state = initState, action){

    switch(action.type){
        case DIARY_GET:{
            return{
                ...state,
                diaryCardsLoading:action.diaryCardsLoading
            }
        }
        case DIARY_POST:{
            return{
                ...state,
                diaryData:action.diaryData,
                diaryCardPostLoading:action.diaryCardPostLoading
            }
        }
        default:return state;
    }
}