import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
///* JANGAN LUPA IMPORT SETIAP REDUCER YANG AKAN DI DISPATCH(dijalankan fungsinya) !
//CART SLICE
/* import { clearCart } from '../features/cart/cartSlice'; */
import CartItem from './CartItem';
//CART MODAL
import { openModal } from '../features/modals/modalSlice';

const CartContainer = () => {
  //Dispatch itu ibaratkan kita Melakukan sebuah aksi ketika disuruh,
  //jadi useDispatch itu -> tolong dong lakuin aksi yang udah di suruh reducer. jadi dispatch itu eksekusi akhir untuk ngerubah state
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  // === DISPATCH => execute some action
  // === SELECTOR => ONLY displaying state, not excecuting action

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  } else {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>${total}</span>
            </h4>
          </div>
          {/* KALO LANGSUNG DI CLEAR */}
          {/*   <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
            clear cart
          </button> */}
          {/* KALO KE MODAL DULU */}
          <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
            Remove All
          </button>
        </footer>
      </section>
    );
  }
};

export default CartContainer;
