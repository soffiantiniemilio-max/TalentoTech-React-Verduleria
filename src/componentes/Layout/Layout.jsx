import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import styles from './Layout.module.css';

// Estructura común a todas las páginas.
// <Outlet /> es el "hueco" donde React Router pinta la página de cada ruta.
function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
