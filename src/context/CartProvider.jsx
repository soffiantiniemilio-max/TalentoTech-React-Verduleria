import { useState } from 'react';
import { CartContext } from './CartContext.jsx';

// 3) El "cerebro" del carrito: guarda el estado y las funciones.
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agrega un producto. Si ya estaba, suma la cantidad (sin pasar el stock).
  const addToCart = (producto, cantidad) => {
    setCart((prev) => {
      const yaEsta = prev.find((item) => item.id === producto.id);
      if (yaEsta) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: Math.min(item.quantity + cantidad, producto.stock) }
            : item,
        );
      }
      return [...prev, { ...producto, quantity: cantidad }];
    });
  };

  // Saca un producto del carrito.
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Vacía todo el carrito.
  const clearCart = () => setCart([]);

  // Cantidad total de unidades (el numerito del CartWidget).
  const getCartQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  // Precio total del carrito.
  const getCartTotal = () => cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  // Cuántas unidades de UN producto ya hay en el carrito.
  const getQuantityInCart = (id) => cart.find((item) => item.id === id)?.quantity ?? 0;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getCartQuantity, getCartTotal, getQuantityInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
