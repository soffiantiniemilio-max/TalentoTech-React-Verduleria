import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer.jsx';
import styles from './Inicio.module.css';

// Filtros que le pasamos a ItemListContainer por props.
const esDestacadoDeVerduleria = (p) => p.destacado && p.categoria !== 'delicatessen';
const esDelicatessen = (p) => p.categoria === 'delicatessen';

const PASOS = [
  { titulo: '1. Elegí', texto: 'Mirá el catálogo del día con precios por kilo, unidad o frasco.' },
  { titulo: '2. Agregá al carrito', texto: 'Sumá cantidades y revisá el total antes de confirmar.' },
  { titulo: '3. Te lo llevamos', texto: 'Repartimos en Pilar y alrededores.' },
];

function Inicio() {
  const [fotoRota, setFotoRota] = useState(false);

  return (
    <>
      <section className={`contenedor ${styles.hero}`}>
        <div className={styles.heroTexto}>
          <span className={styles.etiqueta}>Del cajón a tu puerta</span>
          <h1 className={styles.titulo}>Verdura fresca del barrio, en tu casa.</h1>
          <p className={styles.bajada}>
            Elegí frutas y verduras de estación, sumá productos regionales de Cuyo y la Patagonia,
            y te lo llevamos a domicilio.
          </p>
          <div className={styles.botones}>
            <Link to="/productos" className="boton">Ver productos →</Link>
            <a href="#como-funciona" className="botonSecundario">Cómo funciona</a>
          </div>
        </div>
        {fotoRota ? (
          <div className={`${styles.heroImagen} ${styles.sinFoto}`} aria-hidden="true">🥬🍅🥕</div>
        ) : (
          <img
            src="/images/cajon-verduras.jpg"
            alt="Cajones de verduras frescas"
            className={styles.heroImagen}
            onError={() => setFotoRota(true)}
          />
        )}
      </section>

      <section id="como-funciona" className={`contenedor ${styles.pasos}`}>
        {PASOS.map((paso) => (
          <article key={paso.titulo} className={styles.paso}>
            <h3>{paso.titulo}</h3>
            <p>{paso.texto}</p>
          </article>
        ))}
      </section>

      <section className={`contenedor ${styles.seccion}`}>
        <div className={styles.encabezado}>
          <div>
            <h2>Destacados de la semana</h2>
            <p>Lo más fresco que entró al local.</p>
          </div>
          <Link to="/productos" className={styles.verTodos}>Ver todos los productos</Link>
        </div>
        <ItemListContainer filtro={esDestacadoDeVerduleria} limite={4} />
      </section>

      <section className={styles.regionales}>
        <div className={`contenedor ${styles.seccion}`}>
          <div className={styles.encabezado}>
            <div>
              <span className={styles.etiquetaTierra}>Delicatessen regionales</span>
              <h2 className={styles.tituloTierra}>Sabores de Cuyo y la Patagonia</h2>
              <p>Aceites, dulces y frutos secos de productores regionales.</p>
            </div>
          </div>
          <ItemListContainer filtro={esDelicatessen} limite={4} />
        </div>
      </section>
    </>
  );
}

export default Inicio;
