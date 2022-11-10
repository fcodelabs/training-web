import { createSlice } from '@reduxjs/toolkit'

const initialState={
    descVisiility:'none',
    btnVisibility:'none',
    txtAreaStyle:'9rem',
    textFieldLength:'25rem',
    duration:'0s',
    title:'',
    description:'',
    card:[]

}
export const DiaryHomeSlice=createSlice({
    name:'diaryHome',
    initialState,
    reducers:{
        descVisiilityInline:(state)=>{
            state.descVisiility='inline'
        },
        descVisiilityNone:(state)=>{
            state.descVisiility='none'
        },
        btnVisibilityEnable:(state)=>{
            state.btnVisibility='block'
        },
        btnVisibilityDisable:(state)=>{
            state.btnVisibility='none'
        },
        txtAreaStyleToLarge:(state)=>{
            state.txtAreaStyle='21rem'
        },
        txtAreaStyleToSmall:(state)=>{
            state.txtAreaStyle='9rem'
        },
        textFieldLengthToLong:(state)=>{
            state.textFieldLength='75rem'
        },
        textFieldLengthToShort:(state)=>{
            state.textFieldLength='25rem'
        },
        durationNow:(state)=>{
            state.duration='1s'
        },
        setTitle:(state,action)=>{
            state.title=action.payload
        },
        setDescription:(state,action)=>{
            state.description=action.payload
        }
    }
})
export const {descVisiilityInline,
    descVisiilityNone,
    btnVisibilityEnable,
    btnVisibilityDisable,
    txtAreaStyleToLarge,
    txtAreaStyleToSmall,
    textFieldLengthToLong,
    textFieldLengthToShort,
    durationNow,
    setTitle,
    setDescription}=DiaryHomeSlice.actions
export default DiaryHomeSlice.reducer; 