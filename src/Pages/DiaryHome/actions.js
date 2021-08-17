import {FETCH_ALL_FAIL,FETCH_ALL_START,FETCH_ALL_SUCCESS,ADD_POST_FAIL,ADD_POST_START,ADD_POST_SUCCESS } from "./actionTypes";

export const getPostStart = ()=>{
    return {
        type:FETCH_ALL_START,
    }
}
export const getPostSuccess = (posts)=>{
    return {
        type:FETCH_ALL_SUCCESS,
        payload:posts
    }
}
export const getPostFail = (error)=>{
    return {
        type:FETCH_ALL_FAIL,
        payload:error
    }
}
export const addPostStart = (post)=>{
    console.log(post);
    return {
        type:ADD_POST_START,
        payload:post
    }
}
export const addPostSuccess = (post)=>{
    return {
        type:ADD_POST_SUCCESS,
        payload:post
    }
}
export const addPostFail = (error)=>{
    return {
        type:ADD_POST_FAIL,
        payload:error
    }
}