"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "@/components/header";
import Image from "next/image";
import Footer from "@/components/footer";
import ProductCard from "@/components/ProductCard";
import TagFilter from "@/components/tagFilter";
import { Product } from "@/types/product";

interface ShopProps {
  products: Product[];
  uniqueTags: string[];
  tag?: string;
}

export default function ShopClient({ products, uniqueTags, tag }: ShopProps) {
  const [showTags, setShowTags] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const productsPerPage = 15;

  // Simulate error handling for network failure, empty response, and server errors
  useEffect(() => {
    if (products.length === 0) {
      setError("No products available.");
    } else {
      setError(null);
    }
  }, [products]);

  // Reset current page when the tag changes
  useEffect(() => {
    setCurrentPage(1);
  }, [tag]);

  // Memoize filtered products to avoid unnecessary recalculations
  const filteredProducts = useMemo(() => {
    return tag
      ? products.filter((product) =>
          product.tags?.some(
            (productTag) =>
              productTag.trim().toLowerCase() === tag.trim().toLowerCase()
          )
        )
      : products;
  }, [products, tag]);

  // Calculate pagination values
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = useMemo(
    () => filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct),
    [filteredProducts, indexOfFirstProduct, indexOfLastProduct]
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  // Toggle tags visibility
  const toggleTags = useCallback(() => {
    setShowTags((prev) => !prev);
  }, []);

  return (
    <div className="poppins">
      <Header />
      <div className="hero relative h-[300px]">
        <Image
          src="/shop_1.svg"
          alt="Shop Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-5xl font-bold ">Shop</h1>
          <div className="flex items-center pt-6">
            <h1 className="text-lg font-medium ">Home</h1>
            <Image
              src="/right_arrow.svg"
              alt="Arrow"
              width={10}
              height={10}
              className="mx-2"
            />
            <h1 className="text-lg font-light ">Shop</h1>
          </div>
        </div>
      </div>

      {/* Error Handling UI */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center my-8">
          <strong>Error:</strong> {error}
        </div>
      )}
      <div className="bg-[#F9F1E7] flex items-center py-8 px-32">
        <Image
          src="/filter.svg"
          alt="Filter"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={toggleTags}
        />
        <Image
          src="/big_round.svg"
          alt="Grid View"
          width={25}
          height={25}
          className="ml-16 cursor-pointer"
        />
        <Image
          src="/view_list.svg"
          alt="List View"
          width={25}
          height={25}
          className="ml-16 cursor-pointer"
        />
        <div className="border-l border-gray-300 h-8 mx-9"></div>
        <h1 className="text-lg ml-9">
          Showing {indexOfFirstProduct + 1}–
          {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
          {filteredProducts.length} results
        </h1>
        <div className="ml-auto flex items-center">
          <h1 className="text-xl">Show</h1>
          <input
            type="text"
            placeholder="15"
            className="w-[55px] h-[55px] text-center text-xl mx-4 border border-gray-300"
          />
          <h1 className="text-xl">Sort by</h1>
          <input
            type="text"
            placeholder="Default"
            className="w-[188px] h-[55px] text-center text-xl ml-5 border border-gray-300"
          />
        </div>
      </div>

      {showTags && (
        <div className="bg-[#F9F1E7] p-4">
          <TagFilter tags={uniqueTags} activeTag={tag || undefined} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-12 mt-4 px-32">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <div className="flex justify-center my-28">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`w-16 h-16 rounded-xl mx-2 ${
              currentPage === index + 1
                ? "bg-[#B88E2F] text-white"
                : "bg-[#F9F1E7]"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-24 h-16 bg-[#F9F1E7] rounded-xl ml-12"
        >
          Next
        </button>
      </div>

      <div className="bg-[#FAF3EA] py-28 px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: "/trophy1.svg",
            title: "High Quality",
            description: "Crafted from top materials",
          },
          {
            icon: "/tick.svg",
            title: "Warranty Protection",
            description: "Over 2 years",
          },
          {
            icon: "/free_ship.svg",
            title: "Free Shipping",
            description: "Order over 150 $",
          },
          {
            icon: "/support.svg",
            title: "24 / 7 Support",
            description: "Dedicated support",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-center">
            <Image src={item.icon} alt={item.title} width={70} height={70} />
            <div className="ml-4">
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <h2 className="text-xl text-[#898989] font-medium mt-2">
                {item.description}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
