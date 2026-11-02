import { products, type Product } from '../../mocks/products';

const normalize = (text: string) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

export const searchProducts = (query: string): Product[] => {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return products.filter((product) => {
    const haystack = normalize(`${product.name} ${product.description} ${product.category}`);
    return terms.every((term) => haystack.includes(term));
  });
};
