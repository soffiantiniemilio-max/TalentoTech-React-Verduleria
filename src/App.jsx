import { Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout/Layout.jsx';
import Inicio from './paginas/Inicio.jsx';
import Productos from './paginas/Productos.jsx';
import NotFound from './paginas/NotFound.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './componentes/Cart/Cart.jsx';

function App() {
  return (
    <Routes>
      {/* Layout tiene Header + <Outlet /> + Footer. Cada ruta se pinta en el Outlet. */}
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
