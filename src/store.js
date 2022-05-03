import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './components/basketSlice';
import userReducer from './components/userSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
  },
});
