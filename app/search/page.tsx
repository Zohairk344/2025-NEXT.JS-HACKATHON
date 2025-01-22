"use client";

import { useSearchParams } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";
import { useEffect, useState, Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const searchTerm = query.trim().toLowerCase();
    if (!searchTerm) {
      setProducts([]);
      return;
    }

    const productsQuery = groq`*[_type == "product" && lower(name) contains lower($searchTerm)]`;

    const fetchProducts = async () => {
      try {
        const data = await client.fetch<Product[]>(productsQuery, {
          searchTerm,
        });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found for {query}.</p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}