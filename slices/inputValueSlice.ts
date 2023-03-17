import { createSlice } from '@reduxjs/toolkit';

export interface inputValue {
  value: string;
}

const initialState: inputValue = {
  value: '',
};

export const inputValueSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    toggleinputValue: (state,action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleinputValue } = inputValueSlice.actions;

export default inputValueSlice.reducer;