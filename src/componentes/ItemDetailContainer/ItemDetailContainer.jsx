import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

// CONTAINER del detalle: lee el :id de la URL, busca el producto y se lo pasa a ItemDetail.
function ItemDetailContainer() {
  const { id } = useParams(); // ¡Ojo! llega como texto: "3", no 3
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el producto.');
        return res.json();
      })
      .then((datos) => {
        // find() devuelve undefined si no lo encuentra
        const encontrado = datos.find((p) => String(p.id) === id);
        setProducto(encontrado ?? null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [id]); // si cambia el id en la URL, vuelve a buscar

  if (cargando) return <p className="contenedor" style={{ padding: '48px 20px' }}>Cargando producto...</p>;
  if (error) return <p className="contenedor" style={{ padding: '48px 20px' }}>⚠ {error}</p>;

  // Separamos "cargando" de "no encontrado"
  if (!producto) {
    return (
      <div className="contenedor" style={{ padding: '48px 20px' }}>
        <h1>Producto no encontrado</h1>
        <p>El producto que buscás no existe o ya no está disponible.</p>
        <Link to="/productos" className="boton">Ver productos</Link>
      </div>
    );
  }

  // key: si cambia de producto, ItemDetail arranca de cero (cantidad, avisos)
  return <ItemDetail key={producto.id} producto={producto} />;
}

export default ItemDetailContainer;
