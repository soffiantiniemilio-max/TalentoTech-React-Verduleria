import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { formatearPrecio } from '../../utils/formato.js';
import styles from './ItemDetail.module.css';

// Vista de detalle: muestra toda la info y permite agregar al carrito.
function ItemDetail({ producto }) {
  const { id, nombre, precio, unidad, stock, categoria, origen, imagen, descripcion } = producto;
  const { addToCart, getQuantityInCart } = useCart();

  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(0); // cuántas se agregaron recién (para el mensaje)
  const [imagenRota, setImagenRota] = useState(false);

  // No dejamos agregar más de lo que queda en stock.
  const disponible = stock - getQuantityInCart(id);

  const restar = () => setCantidad((c) => Math.max(1, c - 1));
  const sumar = () => setCantidad((c) => Math.min(disponible, c + 1));

  const agregarAlCarrito = () => {
    addToCart(producto, cantidad); // función del CartContext
    setAgregado(cantidad);
    setCantidad(1);
  };

  return (
    <section className={`contenedor ${styles.detalle}`}>
      <nav aria-label="Ruta" className={styles.migas}>
        <Link to="/productos">Productos</Link> <span aria-hidden="true">/</span> <span>{nombre}</span>
      </nav>

      <div className={styles.columnas}>
        {imagenRota ? (
          <div className={`${styles.imagen} ${styles.sinFoto}`}>{nombre}</div>
        ) : (
          <img src={imagen} alt={nombre} className={styles.imagen} onError={() => setImagenRota(true)} />
        )}

        <div className={styles.info}>
          <div className={styles.chips}>
            <span className={styles.chip}>{categoria}</span>
            {origen && <span className={`${styles.chip} ${styles.origen}`}>Origen: {origen}</span>}
          </div>

          <h1 className={styles.nombre}>{nombre}</h1>
          <p className={styles.precio}>
            {formatearPrecio(precio)} <span className={styles.unidad}>/ {unidad}</span>
          </p>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.stock}>Stock disponible: {disponible} {unidad}</p>

          <div className={styles.compra}>
            {disponible > 0 ? (
              <>
                <div className={styles.fila}>
                  <span className={styles.etiqueta}>Cantidad ({unidad})</span>
                  <div className={styles.contador}>
                    <button type="button" onClick={restar} disabled={cantidad <= 1} aria-label="Restar uno">−</button>
                    <span aria-live="polite">{cantidad}</span>
                    <button type="button" onClick={sumar} disabled={cantidad >= disponible} aria-label="Sumar uno">+</button>
                  </div>
                </div>
                <div className={styles.fila}>
                  <span>Subtotal</span>
                  <strong>{formatearPrecio(precio * cantidad)}</strong>
                </div>
                <button type="button" className="boton" onClick={agregarAlCarrito}>
                  Agregar al carrito
                </button>
              </>
            ) : (
              <p className={styles.sinStock}>Ya agregaste todo el stock disponible de este producto.</p>
            )}

            {agregado > 0 && (
              <p className={styles.aviso} role="status">
                Agregaste {agregado} {unidad} de {nombre} al carrito. <Link to="/carrito">Ir al carrito</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
