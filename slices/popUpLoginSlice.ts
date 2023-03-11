import { createSlice } from '@reduxjs/toolkit';
/* import type { PayloadAction } from '@reduxjs/toolkit'; */

export interface LoginState {
  value: boolean;
}

const initialState: LoginState = {
  value: false,
};

export const popUpLoginSlice = createSlice({
  name: 'popUpLogin',
  initialState,
  reducers: {
    popUpLogin: (state) => {
      state.value = true;
    },
    popUpLoginClose: (state) => {
      state.value = false;
    },
  },
});

export const { popUpLogin, popUpLoginClose } = popUpLoginSlice.actions;

export default popUpLoginSlice.reducer;
