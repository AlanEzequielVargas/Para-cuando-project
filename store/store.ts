import showLoginSlice from '@/slices/showLoginSlice';
import { configureStore } from '@reduxjs/toolkit';
import popUpLoginReducer from '../slices/popUpLoginSlice';

export const store = configureStore({
  reducer: {
    popUpLogin: popUpLoginReducer,
    showLogin: showLoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
