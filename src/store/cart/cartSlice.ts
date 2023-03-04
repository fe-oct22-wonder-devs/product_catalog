/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Phone } from '../../types/Phone';

export interface PhoneInCart extends Phone{
  count: number
}

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

      if (isPhoneInCart) {
        state.phones = state.phones.filter(el => el.id !== phone.id);
      } else {
        state.phones.push(phone);
      }
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.phones;

export default cartSlice.reducer;
