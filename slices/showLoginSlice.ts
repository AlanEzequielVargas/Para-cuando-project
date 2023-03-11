import { createSlice } from '@reduxjs/toolkit';

export interface ShowLogin {
  value: boolean;
}

const initialState: ShowLogin = {
  value: false,
};

export const showLoginSlice = createSlice({
  name: 'showLogin',
  initialState,
  reducers: {
    toggleShowLogin: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleShowLogin } = showLoginSlice.actions;

export default showLoginSlice.reducer;
