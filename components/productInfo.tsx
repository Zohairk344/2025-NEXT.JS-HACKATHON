// components/ProductInfo.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/components/CartContext";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); // Directly add the product to the cart
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl ml-28 mt-12">{product.title}</h1>
      <h2 className="text-[#9F9F9F] text-2xl mt-5 ml-28">Rs. {product.price}</h2>

      {/* Ratings */}
      <div className="flex flex-row">
        <Image
          src="/group_88.svg"
          alt="Ratings"
          width={150}
          height={150}
          className="ml-28 mt-5"
        />
        <div className="vl ml-9 mt-6"></div>
        <h1 className="text-[#9F9F9F] ml-8 mt-8">5 Customer Reviews</h1>
      </div>

      {/* Description */}
      <p className="pl-28 mt-5 w-[650px]">{product.description}</p>

      {/* Size */}
      <h1 className="ml-28 mt-9 text-[#9F9F9F]">Size</h1>
      <div className="flex flex-row ml-20">
        {["L", "XL", "XS"].map((size) => (
          <div
            key={size}
            className={`h-8 w-8 ${
              size === "L" ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
            } ml-10 mt-3 rounded-lg text-center`}
          >
            {size}
          </div>
        ))}
      </div>

      {/* Color */}
      <h1 className="text-[#9F9F9F] ml-28 mt-9">Color</h1>
      <div className="flex flex-row ml-20">
        {["#816DFA", "#000000", "#B88E2F"].map((color) => (
          <div
            key={color}
            className="w-8 h-8 ml-10 mt-3 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-row">
        <Image
          src="/group_93.svg"
          alt="Actions"
          width={130}
          height={70}
          className="ml-28 mt-10"
        />
        <button
          onClick={handleAddToCart}
          className="mt-10 pt-5 pb-5 ml-6 w-[220px] border border-black rounded-xl justify-center items-center text-center"
        >
          <h1 className="text-xl">Add To Cart</h1>
        </button>
        <Link href="/product-compare">
          <div className="mt-10 pt-5 pb-5 ml-6 w-[220px] border border-black rounded-xl justify-center items-center text-center">
            <h1 className="text-xl">+ Compare</h1>
          </div>
        </Link>
      </div>

      {/* Divider */}
      <div className="ml-28 mt-9">
        <hr style={{ borderTop: "2px solid lightgrey" }} />
      </div>

      {/* Additional Info */}
      <div className="flex flex-col mt-9 ml-28 text-[#9F9F9F]">
        <div className="flex flex-row">
          <h1 className="text-lg">SKU </h1>
          <h1 className="text-lg ml-20">:</h1>
          <h1 className="text-lg ml-2">SS001</h1>
        </div>
        <div className="flex flex-row mt-3">
          <h1 className="text-lg">Category </h1>
          <h1 className="text-lg ml-8">:</h1>
          <h1 className="text-lg ml-2">Sofas</h1>
        </div>
        <div className="flex flex-row mt-3">
          <h1 className="text-lg mt-1">Tags </h1>
          <h1 className="text-lg ml-[74px] mt-1">:</h1>
          <div className="text-lg ml-2 flex flex-row flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-gray-400 px-3 py-1 rounded-full text-lg whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <h1 className="text-lg">Share </h1>
          <h1 className="text-lg ml-[74px]">:</h1>
          <div className="text-lg ml-2 flex flex-row space-x-7">
            <Image
              src="/facebook.svg"
              alt="Facebook"
              width={30}
              height={30}
              className="ml-3"
            />
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="ml-3"
            />
            <Image
              src="/twitter.svg"
              alt="Twitter"
              width={35}
              height={35}
              className="ml-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}