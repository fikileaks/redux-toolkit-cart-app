import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
//redux stuff
import { useDispatch, useSelector } from 'react-redux';
//cart items
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';

function App() {
  /* REDUCER */
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  /* ACTION */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  /* esLint Issues : https://github.com/facebook/react/issues/14920 */

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
