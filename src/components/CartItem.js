import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* INCREASE */}
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}>
          <ChevronUp />
        </button>
        {/* AMOUNT VALUE */}
        <p className="amount">{amount}</p>
        {/* DECREASE */}
        <button
          className="amount-btn"
          onClick={() => {
            // kalo jumlah ada 1, terus masih di klik tombolnya, dia bukannya bikin minus (-1) tapi dia nge remove item yang ada di cart
            if (amount === 1) {
              dispatch(removeItem(id));
            }
            //kalo jumlah item !== 1, maka dia ngejalanin fungsi decrease
            dispatch(decrease({ id }));
          }}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
