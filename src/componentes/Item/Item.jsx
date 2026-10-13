import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatearPrecio } from '../../utils/formato.js';
import styles from './Item.module.css';

// CARD presentacional: recibe los datos del producto por props y los muestra.
function Item({ id, nombre, precio, unidad, categoria, origen, imagen }) {
  // Si la foto no existe todavía, mostramos un recuadro de color con el nombre.
  const [imagenRota, setImagenRota] = useState(false);

  return (
    <article className={styles.card}>
      {imagenRota ? (
        <div className={`${styles.imagen} ${styles.sinFoto} ${styles[categoria]}`}>{nombre}</div>
      ) : (
        <img
          src={imagen}
          alt={nombre}
          className={styles.imagen}
          loading="lazy"
          onError={() => setImagenRota(true)}
        />
      )}

      <div className={styles.info}>
        <div className={styles.chips}>
          <span className={styles.chip}>{categoria}</span>
          {/* Renderizado condicional: solo si el producto tiene origen */}
          {origen && <span className={`${styles.chip} ${styles.origen}`}>Origen: {origen}</span>}
        </div>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.precio}>
          {formatearPrecio(precio)} <span className={styles.unidad}>/ {unidad}</span>
        </p>
      </div>

      <Link to={`/producto/${id}`} className={`boton ${styles.boton}`}>
        Ver detalle
      </Link>
    </article>
  );
}

export default Item;
