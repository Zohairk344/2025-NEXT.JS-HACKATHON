import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function fetchProducts(tag?: string): Promise<Product[]> {
  const query = `*[_type == "product" ${tag ? `&& "${tag}" in tags` : ''}] | order(_createdAt asc) {
    _id, // Fetch the default Sanity ID
    title,
    description,
    price,
    discountprice,
    tags,
    imageurl {
      asset-> {
        url
      }
    }
  }`;

  const products = await client.fetch(query);
  return products.map((product : any, index : any) => ({
    ...product,
    id: index + 1, // Generate numeric ID
  }));
}

export async function fetchUniqueTags(): Promise<string[]> {
  const query = `*[_type == "product"] {
    tags
  }`;

  try {
    const products = await client.fetch<{ tags: string[] }[]>(query);
    const allTags = products.flatMap(product => 
      product.tags?.map(tag => tag.trim().toLowerCase()) || []
    );
    
    // Remove duplicates and return unique tags
    return Array.from(new Set(allTags));
  } catch (error) {
    console.error("Error fetching unique tags from Sanity:", error);
    throw new Error("Failed to fetch unique tags");
  }
}