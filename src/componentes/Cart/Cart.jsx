import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { formatearPrecio } from '../../utils/formato.js';
import styles from './Cart.module.css';

// Página /carrito: lee todo directamente del CartContext (sin props).
function Cart() {
  const { cart, removeFromCart, clearCart, getCartQuantity, getCartTotal } = useCart();
  const [confirmado, setConfirmado] = useState(false);

  const confirmarPedido = () => {
    // Por ahora es una simulación: el envío real necesita backend.
    setConfirmado(true);
    clearCart();
  };

  if (confirmado) {
    return (
      <section className={`contenedor ${styles.vacio}`}>
        <h1>¡Gracias por tu pedido! 🥬</h1>
        <p>Esta es una versión de prueba: el pedido no se envió de verdad.</p>
        <Link to="/productos" className="boton">Seguir comprando</Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className={`contenedor ${styles.vacio}`}>
        <h1>Tu carrito está vacío</h1>
        <p>Agregá productos para armar tu pedido.</p>
        <Link to="/productos" className="boton">Ver productos</Link>
      </section>
    );
  }

  return (
    <section className={`contenedor ${styles.carrito}`}>
      <h1>Tu carrito</h1>

      <div className={styles.columnas}>
        <ul className={styles.lista}>
          {cart.map((item) => (
            <li key={item.id} className={styles.fila}>
              <div className={styles.datos}>
                <Link to={`/producto/${item.id}`} className={styles.nombre}>{item.nombre}</Link>
                <span className={styles.detalle}>
                  {formatearPrecio(item.precio)} / {item.unidad} · Cantidad: {item.quantity}
                </span>
              </div>
              <strong>{formatearPrecio(item.precio * item.quantity)}</strong>
              <button
                type="button"
                className={styles.quitar}
                onClick={() => removeFromCart(item.id)}
                aria-label={`Quitar ${item.nombre} del carrito`}
              >
                Quitar
              </button>
            </li>
          ))}
          <li className={styles.acciones}>
            <button type="button" className="botonSecundario" onClick={clearCart}>Vaciar carrito</button>
          </li>
        </ul>

        <aside className={styles.resumen}>
          <h2>Resumen</h2>
          <p className={styles.linea}><span>Productos ({getCartQuantity()})</span><span>{formatearPrecio(getCartTotal())}</span></p>
          <p className={styles.linea}><span>Envío</span><span>A coordinar</span></p>
          <p className={`${styles.linea} ${styles.total}`}><span>Total</span><span>{formatearPrecio(getCartTotal())}</span></p>
          <button type="button" className="boton" onClick={confirmarPedido}>Confirmar pedido</button>
          <Link to="/productos" className={styles.seguir}>Seguir comprando</Link>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
