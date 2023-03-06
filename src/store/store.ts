import { configureStore } from '@reduxjs/toolkit';
import counterSlicer from './cart/cartSlice';
import favoriteSlicer from './cart/favoriteSlice';

export const store = configureStore({
  reducer: {
    cart: counterSlicer,
    favorite: favoriteSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
