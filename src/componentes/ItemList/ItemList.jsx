import Item from '../Item/Item.jsx';
import styles from './ItemList.module.css';

// LIST: recibe el array y dibuja un Item por cada producto.
// La key va siempre en el elemento que devuelve el .map().
function ItemList({ productos }) {
  return (
    <div className={styles.grilla}>
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
}

export default ItemList;
