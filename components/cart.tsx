// components/Cart.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartContext";

export default function CartLink() {
  const { cartCount } = useCart();

  return (
    <Link href="/cart" className="flex items-center gap-2">
      <Image src="/cart-icon.svg" width={24} height={24} alt="Cart" />
      <span className="bg-[#B88E2F] text-white rounded-full w-6 h-6 flex items-center justify-center">
        {cartCount}
      </span>
    </Link>
  );
}