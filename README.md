# Verdulería del Barrio 🥬

Pre-entrega del curso **React JS – Talento Tech** (comisión 26243).
Tienda online de una verdulería de Pilar con una sección de **delicatessen de Cuyo y la Patagonia**.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir http://localhost:5173

## Requerimientos de la pre-entrega

| # | Requerimiento | Dónde está |
|---|---|---|
| 1 | Estructura y Layout (Header, nav, Footer con equipo) | `src/componentes/Layout`, `Header`, `Footer` |
| 2 | Catálogo con `useEffect` + `fetch` a `productos.json` | `src/componentes/ItemListContainer` → `ItemList` → `Item` |
| 3 | Ruteo: `/`, `/productos`, `/producto/:id`, `/carrito` | `src/App.jsx` |
| 4 | Carrito con Context API (`addToCart`, CartWidget, `/carrito`) | `src/context/CartContext.jsx` + `CartProvider.jsx`, `CartWidget`, `ItemDetail`, `Cart` |
| 5 | Deploy en Netlify / Vercel | `public/_redirects` y `vercel.json` |

## Estructura

```
public/
  data/productos.json   ← catálogo (16 productos)
  data/equipo.json      ← tarjetas del footer
  images/               ← fotos de los productos
src/
  context/CartContext.jsx  ← createContext + hook useCart
  context/CartProvider.jsx ← estado y funciones del carrito
  componentes/          ← Layout, Header, CartWidget, Footer, ItemListContainer,
                           ItemList, Item, ItemDetailContainer, ItemDetail, Cart
  paginas/              ← Inicio, Productos, NotFound
```

Fotos: [Pexels](https://www.pexels.com) (licencia libre).
