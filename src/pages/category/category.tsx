import { Link, useParams } from 'react-router';
import { categories, products } from '../../mocks/products';
import styles from './category.module.css';

export const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categories.find((category) => category.slug === categorySlug);

  if (!category) {
    return <main className={styles.catalog}><h1>Categoria no encontrada</h1></main>;
  }

  const categoryProducts = products.filter((product) => product.category === category.category);

  return (
    <main className={styles.catalog}>
      <h1>{category.name}</h1>
      <p>{categoryProducts.length} productos</p>
      {categoryProducts.length === 0 ? (
        <p>No hay productos disponibles en esta categoria.</p>
      ) : (
        <ul className={styles.productGrid}>
          {categoryProducts.map((product) => (
            <li key={product.id}>
              <Link className={styles.productLink} to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <h2>{product.name}</h2>
                <p>
                  {product.price.toLocaleString('es-AR', {
                    style: 'currency',
                    currency: 'ARS',
                  })}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};