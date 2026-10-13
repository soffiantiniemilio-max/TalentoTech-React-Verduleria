import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import styles from './ItemListContainer.module.css';

const CATEGORIAS = [
  { id: 'todos', label: 'Todos' },
  { id: 'fruta', label: 'Frutas' },
  { id: 'verdura', label: 'Verduras' },
  { id: 'delicatessen', label: 'Delicatessen regionales' },
];

// CONTAINER: tiene la lógica (fetch + estados) y le pasa los datos a ItemList.
// Props opcionales:
//  - filtro: función para quedarse con algunos productos (ej. los destacados)
//  - limite: cuántos mostrar como máximo
//  - mostrarFiltros: si muestra los botones de categoría
function ItemListContainer({ filtro, limite, mostrarFiltros = false }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [categoria, setCategoria] = useState('todos');

  // Se ejecuta UNA vez, cuando el componente aparece en pantalla.
  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => {
        // fetch NO entra al catch con un 404: lo tenemos que avisar nosotros.
        if (!res.ok) throw new Error('No se pudieron cargar los productos.');
        return res.json();
      })
      .then((datos) => setProductos(datos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p className={styles.estado}>Cargando productos...</p>;
  if (error) return <p className={`${styles.estado} ${styles.error}`}>⚠ {error}</p>;

  // Aplicamos los filtros en orden.
  let visibles = filtro ? productos.filter(filtro) : productos;
  if (categoria !== 'todos') {
    visibles = visibles.filter((p) => p.categoria === categoria);
  }
  if (limite) {
    visibles = visibles.slice(0, limite);
  }

  return (
    <div className={styles.contenedor}>
      {mostrarFiltros && (
        <div className={styles.filtros} role="group" aria-label="Filtrar por categoría">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={cat.id === categoria}
              className={cat.id === categoria ? `${styles.filtro} ${styles.activo}` : styles.filtro}
              onClick={() => setCategoria(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {visibles.length === 0 ? (
        <p className={styles.estado}>No hay productos en esta categoría.</p>
      ) : (
        <ItemList productos={visibles} />
      )}
    </div>
  );
}

export default ItemListContainer;
