import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modals/modalSlice';
import { clearCart } from '../features/cart/cartSlice';

const Modal = () => {
  //disini gapake useSelector, karena useSelector berfungsi buat ngambil STATE AJA DARI STORE !
  //cukup pake useDispatch, karna fungsi dari useDispatch itu sendiri yaitu hanya sebagai media transfer fungsi yang ada di reducer untuk di eksekusi
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart ?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}>
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}>
            CANCEL
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
