import { useParams } from 'react-router';
import { products } from '../../mocks/products';

export const ProductPage = () => {
  const { idSlug } = useParams<{ idSlug: string }>();
  const product = products.find((product) => String(product.id) === idSlug);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <article>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width={320} />
      <p>{product.description}</p>
      <p>
        {product.price.toLocaleString('es-AR', {
          style: 'currency',
          currency: 'ARS',
        })}
      </p>
    </article>
  );
};