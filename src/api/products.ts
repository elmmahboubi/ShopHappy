import type { Product } from '../types/product';

// Import all product JSON files at build time
const productModules = import.meta.glob('../products/*/product.json', { eager: true });

export async function getProducts(): Promise<Product[]> {
  const products = Object.entries(productModules).map(([path, module]) => {
    const slug = path.split('/')[2]; // Get folder name as slug
    return {
      id: slug,
      slug,
      ...(module as any).default
    };
  });

  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find(product => product.slug === slug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getProducts();
  return products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
}

export async function getRelatedProducts(slug: string): Promise<Product[]> {
  const products = await getProducts();
  const currentProduct = products.find(p => p.slug === slug);
  
  if (!currentProduct) return [];
  
  return products
    .filter(product => 
      product.category === currentProduct.category && 
      product.slug !== slug
    )
    .slice(0, 3);
}