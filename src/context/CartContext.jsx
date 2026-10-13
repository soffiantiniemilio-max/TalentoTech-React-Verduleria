import { createContext, useContext } from 'react';

// 1) La "caja" donde guardamos el carrito para toda la app.
// El componente que la llena (CartProvider) está en CartProvider.jsx:
// la regla de ESLint de Vite pide que un archivo con componentes exporte SOLO componentes.
export const CartContext = createContext();

// 2) Hook propio: en vez de useContext(CartContext) escribimos useCart().
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};
