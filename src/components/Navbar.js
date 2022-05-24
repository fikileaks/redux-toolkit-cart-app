import { useSelector } from 'react-redux';
import { CartIcon } from '../icons';

const Navbar = () => {
  //valuenya berupa entire store yang berupa SLICE:NAME(INITIAL STATE) yang dilempar ke STORE
  //SLICE -> STORE -> DISPLAY (NAVBAR)
  /*   console.log(
    useSelector((store) => {
      console.log(store);
    })
  ); */

  /*   OPTION 1 >>>> TANPA DESTRUC, jadi dia ambil langsung dari STORE/TOKO , di select STORENYA pake USESELECTOR, di persempit SCOPENYA pake arrow function STORE->CART->AMOUNT
  const amount = useSelector((store) => store.cart.amount); */

  /* OPTION 2 >>>> LANGSUNG DESTRUCTURING dari STORE ke KOMPONEN STATE yang udah di declare di slice */
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
