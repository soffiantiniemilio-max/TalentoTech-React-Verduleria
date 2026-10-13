import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer.jsx';

// Página /productos: todo el catálogo, con los botones de categoría.
function Productos() {
  return (
    <section className="contenedor" style={{ paddingTop: 40 }}>
      <h1 style={{ fontSize: 44, marginBottom: 8 }}>Productos</h1>
      <p style={{ marginTop: 0, marginBottom: 24, color: 'var(--texto-suave)' }}>
        Verdulería del barrio y delicatessen de Cuyo y la Patagonia.
      </p>
      <ItemListContainer mostrarFiltros />
    </section>
  );
}

export default Productos;
