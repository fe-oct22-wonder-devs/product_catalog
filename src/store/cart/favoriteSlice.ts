/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Phone } from '../../types/Phone';

interface PhoneState {
  phones: Phone[]
}

const initialState: PhoneState = {
  phones: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Phone>) => {
      const phone = action.payload;
      const isPhoneInCart = state.phones.some(el => el.id === phone.id);

      if (!isPhoneInCart) {
        state.phones.push(phone);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      const phoneId = action.payload;
      const isPhoneInCart = state.phones.some(el => el.id === phoneId);

      if (isPhoneInCart) {
        state.phones = state.phones.filter(el => el.id !== phoneId);
      }
    },
  },
});

export const {
  addToFavorite, removeFromFavorite,
} = favoriteSlice.actions;

export const selectFavorite = (state: RootState) => state.favorite.phones;

export default favoriteSlice.reducer;
