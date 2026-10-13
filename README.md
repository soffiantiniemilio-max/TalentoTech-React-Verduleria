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

## Créditos de imágenes

Todas las fotos son de [Pexels](https://www.pexels.com) y se usan bajo la [licencia de Pexels](https://www.pexels.com/license/) (uso libre, sin atribución obligatoria).

| Producto | Archivo | Foto original |
|---|---|---|
| Tomate perita | `tomate.jpg` | https://www.pexels.com/photo/10112127/ |
| Papa | `papa.jpg` | https://www.pexels.com/photo/10899606/ |
| Cebolla | `cebolla.jpg` | https://www.pexels.com/photo/6316541/ |
| Zanahoria | `zanahoria.jpg` | https://www.pexels.com/photo/16812115/ |
| Lechuga criolla | `lechuga.jpg` | https://www.pexels.com/photo/28524414/ |
| Zapallito redondo | `zapallito.jpg` | https://www.pexels.com/photo/7511818/ |
| Frutilla | `frutilla.jpg` | https://www.pexels.com/photo/18018686/ |
| Banana | `banana.jpg` | https://www.pexels.com/photo/4399936/ |
| Manzana roja | `manzana.jpg` | https://www.pexels.com/photo/12955951/ |
| Limón | `limon.jpg` | https://www.pexels.com/photo/1414122/ |
| Portada (Inicio) | `cajon-verduras.jpg` | https://www.pexels.com/photo/1691180/ |
| Aceite de oliva | `aceite-oliva.jpg` | https://www.pexels.com/photo/25745504/ |
| Aceitunas verdes | `aceitunas.jpg` | https://www.pexels.com/photo/13922328/ |
| Pasas de uva | `pasas.jpg` | https://www.pexels.com/photo/12945019/ |
| Dulce de rosa mosqueta | `rosa-mosqueta.jpg` | https://www.pexels.com/photo/7586251/ |
| Dulce de calafate | `calafate.jpg` | https://www.pexels.com/photo/14218061/ |
| Hongos de pino | `hongos.jpg` | https://www.pexels.com/photo/7717477/ |
