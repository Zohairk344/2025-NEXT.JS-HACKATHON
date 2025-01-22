// app/shop/ShopPage.server.tsx
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";
import Shop from "./ShopClient"; // Import the Client Component

/* eslint-disable @typescript-eslint/no-unused-vars */

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  // Fetch products from Sanity
  const fetchProducts = `*[_type == "product"] | order(_createdAt asc) {
    "id": count(*[_type == "product" && _createdAt < ^._createdAt]) + 1,
    title,
    price,
    description,
    tags,
    imageurl {
      asset-> {
        url
      }
    }
  }`;

  const products = await client.fetch<Product[]>(fetchProducts);

  // Extract unique tags from products
  const allTags = products.flatMap(
    (product) => product.tags?.map((tag) => tag.trim().toLowerCase()) || []
  );

  const uniqueTags = Array.from(new Set(allTags));

  // Pass the fetched data as props to the Shop component
  return <Shop products={products} uniqueTags={uniqueTags} />;
}
