import {DIARY_GET, DIARY_POST, DIARY_SUCCESS} from "./actionTypes";

export function diaryGet(){
    return({
        type:DIARY_GET
    })
}

export function successData(diaryItems){
    return({
        type:DIARY_SUCCESS,
        diaryItems
    })
}

export function diaryPost (formData) {
    return({
        type:DIARY_POST,
        formData
    })
}