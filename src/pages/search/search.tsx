import { Link, useSearchParams } from 'react-router';
import { searchProducts } from '../../shared/utils/searchProducts';
import styles from '../category/category.module.css';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const results = searchProducts(query);

  return (
    <main className={styles.catalog}>
      <h1>{query ? `Resultados para "${query}"` : 'Buscar productos'}</h1>
      <p>{results.length} productos</p>
      {results.length === 0 ? (
        <p>No se encontraron productos que coincidan con la búsqueda.</p>
      ) : (
        <ul className={styles.productGrid}>
          {results.map((product) => (
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
