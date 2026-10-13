import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.jsx';
import styles from './Header.module.css';

// NavLink es como Link, pero sabe si su ruta está activa (para resaltarla).
const claseLink = ({ isActive }) => (isActive ? `${styles.link} ${styles.activo}` : styles.link);

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.aviso}>Envío a domicilio en Pilar y alrededores · Frutas, verduras y sabores regionales</p>

      <div className={`contenedor ${styles.barra}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcono} aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </span>
          <span className={styles.logoTexto}>Verdulería del Barrio</span>
        </Link>

        <nav aria-label="Principal" className={styles.nav}>
          <NavLink to="/" end className={claseLink}>Inicio</NavLink>
          <NavLink to="/productos" className={claseLink}>Productos</NavLink>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
}

export default Header;
