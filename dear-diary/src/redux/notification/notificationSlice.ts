import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  type: 'success',
  message: '',
  show: false,
  showtime: false,
  elapsedMinutes: 0,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<{ type: 'success' | 'error', message: string, show: boolean, showtime: boolean }>) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.show = action.payload.show;
      state.showtime = action.payload.showtime;
      state.elapsedMinutes = 0;
    },
    incrementElapsedMinutes: (state) => {
      state.elapsedMinutes += 1;
    },
    hideNotification: (state) => {
        state.show = false;
        state.showtime = false;
        state.elapsedMinutes = 0;
        state.message = '';
    }

  },
});

export const { setNotification, incrementElapsedMinutes, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;