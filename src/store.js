import { configureStore } from '@reduxjs/toolkit';
import './features/cart/cartSlice';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modals/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
