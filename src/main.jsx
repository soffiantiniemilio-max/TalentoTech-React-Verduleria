import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartProvider.jsx';
import App from './App.jsx';
import './index.css';

// BrowserRouter va UNA sola vez (acá, no también en App.jsx).
// CartProvider envuelve a App: así cualquier componente puede usar el carrito.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
