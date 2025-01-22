"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductImages from "@/components/productImages";
import ProductInfo from "@/components/productInfo";
import RelatedProducts from "@/components/RelatedProducts";
import { Product } from "@/types/product";
import { useCart } from "@/components/CartContext";
import Image from "next/image";

/* eslint-disable @typescript-eslint/no-unused-vars */

interface SingleItemClientProps {
  item: Product;
  relatedProducts: Product[];
}

export default function SingleItemClient({ item, relatedProducts }: SingleItemClientProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleAddToCart = () => {
    addToCart(item, quantity); // Pass the selected quantity
  };

  return (
    <div className="poppins">
      <Header />

      {/* Breadcrumb */}
      <div className="py-10 bg-[#F9F1E7] pl-40 flex flex-row">
        <h1 className="text-[#9F9F9F] text-lg mt-2">Home</h1>
        <Image
          src="/right_arrow.svg"
          alt=""
          width={10}
          height={10}
          className="ml-6"
        />
        <h1 className="text-[#9F9F9F] text-lg ml-7 mt-2">Shop</h1>
        <Image
          src="/right_arrow.svg"
          alt=""
          width={10}
          height={10}
          className="ml-7"
        />
        <div className="vl ml-9 mt-1"></div>
        <h1 className="mt-3 text-lg ml-14">{item.title}</h1>
      </div>

      {/* Product Details */}
      <div className="flex flex-row">
        <ProductImages product={item} />
        <ProductInfo product={item} />
      </div>

      {/* Divider */}
      <div className="pt-10">
        <hr style={{ borderTop: "2px solid lightgrey" }} />
      </div>

      {/* Description and Reviews */}
      <div className="flex flex-col">
        <div className="flex flex-row justify-center text-2xl space-x-28 py-16">
          <h1>Description</h1>
          <h1 className="text-[#9F9F9F]">Additional Information</h1>
          <h1 className="text-[#9F9F9F]">Reviews [5]</h1>
        </div>
        <p className="ml-72 text-lg text-[#9F9F9F] w-[1200px]">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="ml-72 text-lg text-[#9F9F9F] w-[1200px] mt-12">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
        <Image
          src="/group_109.svg"
          alt=""
          width={1920}
          height={500}
          className="my-16"
        />
      </div>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      {/* Footer */}
      <Footer />
    </div>
  );
}