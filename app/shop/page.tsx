/* eslint-disable */
import { Suspense } from 'react';
import ShopClient from './ShopClient';
import { fetchProducts, fetchUniqueTags } from '@/lib/sanity';

export default async function ShopPage({ searchParams } : any) {
  const tag = searchParams.tag;

  // Fetch products and unique tags
  const [products, uniqueTags] = await Promise.all([
    fetchProducts(tag), // Pass the tag parameter
    fetchUniqueTags(),
  ]);

  // Assign numeric IDs to products
  const productsWithNumericIds = products.map((product, index) => ({
    ...product,
    id: index + 1, // Generate numeric ID
  }));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopClient 
        products={productsWithNumericIds}
        uniqueTags={uniqueTags}
        tag={tag} // Pass the tag as a prop
      />
    </Suspense>
  );
}