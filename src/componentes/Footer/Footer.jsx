import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

// Footer: datos de la empresa + tarjetas del equipo (leídas de equipo.json).
function Footer() {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    fetch('/data/equipo.json')
      .then((res) => res.json())
      .then((datos) => setEquipo(datos))
      .catch(() => setEquipo([]));
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.columnas}`}>
        <div className={styles.columna}>
          <h2 className={styles.marca}>Verdulería del Barrio</h2>
          <p className={styles.texto}>
            Frutas y verduras de estación elegidas cada mañana, y delicatessen de Cuyo y la Patagonia.
            Te lo llevamos a tu casa.
          </p>
        </div>

        <div className={styles.columna}>
          <h3 className={styles.subtitulo}>Contacto</h3>
          <p className={styles.texto}>Pilar, Provincia de Buenos Aires</p>
          <p className={styles.texto}>Lunes a sábado de 8 a 20 h</p>
          <p className={styles.texto}>Pedidos por la web</p>
        </div>

        <div className={styles.columna}>
          <h3 className={styles.subtitulo}>Nuestro equipo</h3>
          <ul className={styles.equipo}>
            {equipo.map((persona) => (
              <li key={persona.id} className={styles.tarjeta}>
                <span className={styles.avatar} aria-hidden="true">{persona.nombre.charAt(0)}</span>
                <span>
                  <span className={styles.nombre}>{persona.nombre}</span>
                  <span className={styles.rol}>{persona.rol}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`contenedor ${styles.legal}`}>
        <span>© 2026 Verdulería del Barrio</span>
        <span>Pre-entrega React · Talento Tech</span>
      </div>
    </footer>
  );
}

export default Footer;
