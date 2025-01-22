// components/AddToCartButton.tsx
"use client";

import React, { useState } from "react";
import { useCart } from "@/components/CartContext";
import { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    addToCart(product); // Add one unit of the product to the cart
    setMessage(`${product.title} added to cart!`);
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-[#B88E2F] text-white px-6 py-2 rounded hover:bg-[#9a7627] transition-colors"
      >
        Add to Cart
      </button>
      {message && <p className="text-green-600 text-sm">{message}</p>}
    </div>
  );
}