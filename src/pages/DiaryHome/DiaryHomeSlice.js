import { createSlice } from '@reduxjs/toolkit'

export const diaryHomeSlice = createSlice({
  name: 'diaryHome',
  initialState: {
    title: "",
    description:"",
    visibility:"none",
    titleClicked:false,
    width:"",
    cards:[]
  },
  reducers: {
    expand: state => {
      state.visibility = "block";
      state.width ="80%";
    },
    collapse: state => {
      state.visibility = "none";
      state.width ="30%";
    },
    titleIsClicked: state => {
        state.titleClicked = true;
    },
    titleIsNotClicked: state => {
        state.titleClicked = false;
    },
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setDescription: (state, action) => {
        state.description = action.payload
    },
    addCard: (state, action) => {
        state.cards.push(action.payload)
    }

  }
})

// Action creators are generated for each case reducer function
export const { expand, collapse, titleIsClicked,titleIsNotClicked,setTitle,setDescription,addCard } = diaryHomeSlice.actions

export default diaryHomeSlice.reducer