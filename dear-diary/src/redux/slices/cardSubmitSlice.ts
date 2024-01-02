import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isSubmit: boolean;
}

const initialState: InitialState = {
  isSubmit: false,
};

const submitSlice = createSlice({
  name: "submit",
  initialState,
  reducers: {
    setSubmitTrue: (state) => {
      state.isSubmit = true;
    },
    setSubmitFalse: (state) => {
      state.isSubmit = false;
    },
  },
});

export const { setSubmitTrue, setSubmitFalse } = submitSlice.actions;
export default submitSlice.reducer;
