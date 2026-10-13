import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import styles from './CartWidget.module.css';

// Ícono del carrito con el numerito. El número sale del CartContext,
// por eso se actualiza solo cuando alguien agrega un producto.
function CartWidget() {
  const { getCartQuantity } = useCart();
  const total = getCartQuantity();

  return (
    <Link to="/carrito" className={styles.widget} aria-label={`Carrito, ${total} productos`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      <span>Carrito</span>
      <span className={styles.numero}>{total}</span>
    </Link>
  );
}

export default CartWidget;
