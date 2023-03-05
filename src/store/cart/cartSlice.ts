/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Phone, PhoneInCart } from '../../types/Phone';

interface PhoneState {
  phones: PhoneInCart[]
}

const initialState: PhoneState = {
  phones: [],
};

export const cartSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Phone>) => {
      const phone = { ...action.payload, count: 1 };
      const isPhoneInCart = state.phones.some(el => el.id === phone.id);

      if (!isPhoneInCart) {
        state.phones.push(phone);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const phoneId = action.payload;
      const isPhoneInCart = state.phones.some(el => el.id === phoneId);

      if (isPhoneInCart) {
        state.phones = state.phones.filter(el => el.id !== phoneId);
      }
    },
    increment: (state, action: PayloadAction<string>) => {
      const phoneId = action.payload;
      const phone = state.phones.find(el => el.id === phoneId);

      if (phone) {
        phone.count += 1;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const phoneId = action.payload;
      const phone = state.phones.find(el => el.id === phoneId);

      if (phone && phone.count > 1) {
        phone.count -= 1;
      }
    },
  },
});

export const {
  addToCart, removeFromCart, increment, decrement,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.phones;

export default cartSlice.reducer;
