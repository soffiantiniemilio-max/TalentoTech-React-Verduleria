import { Link } from 'react-router-dom';

// Ruta "*": cualquier dirección que no existe.
function NotFound() {
  return (
    <section className="contenedor" style={{ paddingTop: 64, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <h1>Página no encontrada</h1>
      <p>La dirección que buscás no existe.</p>
      <Link to="/" className="boton">Volver al inicio</Link>
    </section>
  );
}

export default NotFound;
