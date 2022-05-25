import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
//redux stuff
import { useDispatch, useSelector } from 'react-redux';
//cart items
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';

function App() {
  /* REDUCER */
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  /* ACTION */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  /* esLint Issues : https://github.com/facebook/react/issues/14920 */

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    <div className="loading">
      <h1>loading data</h1>
    </div>;
  } else {
    return (
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    );
  }
}

export default App;
