import { configureStore } from '@reduxjs/toolkit';
import counterSlicer from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: counterSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
