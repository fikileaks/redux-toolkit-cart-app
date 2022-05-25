import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
//EXPLANATION : state cartItems ngambil data dari cartItems file yang ada di cartItems.js

//importing url to fetched

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

///////////ASYNC THUNK : handle promise -> yang di extraReducer di export sebagai action yang bakal di dispatch di komponen lain
export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  //Reducer Merupakan FUNGSI yang dijalankan ketika ada ACTION TYPE yang SAMA !
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    /* PAYLOAD di DESTRUCT sebagai OBJECT. jadinya bisa ambil id sebagai object value dari PAYLOAD.ID */
    /* PAYLOAD GA DI SET DISINI, tapi di SET DI KOMPONEN YANG MAU DI RENDER */
    /* karna di CartItems.js ada value id, makanya dia cari yang dari situ, jadi pas dia find yang array array find baru yang berupa item, di cari id di CartItems.id (cartItems.js) */
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    /* payloadnya masuk dari mana? masuk dari komponen yang mau di render, dia harus kasih nilai payloadnya */
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      /* disini dia nge set kodisi logicnya : ngeset kodisi awal = 0 */
      let amount = 0;
      let total = 0;
      /* disini dia nge set logic supaya ketika amount dan total nambah, valuenya juga berubah */
      state.cartItems.forEach((item) => {
        /* dari state line 6 (state.amount) dia nge forEach menjadi bagian dari (item). jadiiii, bisa ngambil value amount yang berasal dari state.cartItems  */
        amount += item.amount;
        total += item.amount * item.price;
      });
      /* Disini dia nge set State final nya */
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    /* Automatically create 3 lifecyle function : pending, fullfilled, rejected */
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
  //buat jalanin reducernya, kita pake DISPATCH !
  // fullfiled contain action karna dia action yang berupa resolve
});
// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;

//!=== JANGAN SALAH HURUF BESAR DAN HURUF KECIL DI SETIAP ACTION(S) REDUSER(S) dan LAINNYA ===
