"use client";

import React, { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";
import ProductImages from "@/components/productImages";
import ProductInfo from "@/components/productInfo";
import RelatedProducts from "@/components/RelatedProducts";
import { Product } from "@/types/product";
import { useCart } from "@/components/CartContext";
import Image from "next/image";
import Icon from "@/public/Meubel_House_Logos-05.svg";
import Account_Icon from "@/public/Vector.svg";
import Search_Icon from "@/public/icons_search.svg";
import Heart_Icon from "@/public/icons_heart.svg";
import Shopping_Cart_Icon from "@/public/shopping_cart.svg";
import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

/* eslint-disable @typescript-eslint/no-unused-vars */

interface CartSidebarClientProps {
  item: Product;
  relatedProducts: Product[];
}

export default function CartSidebarClient({
  item,
  relatedProducts,
}: CartSidebarClientProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleAddToCart = () => {
    addToCart(item, quantity); // Pass the selected quantity
  };

  const [showSearch, setShowSearch] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showSearch &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  return (
    <div className="poppins">
      <div className="flex flex-row py-4 poppins bg-white relative">
        {/* Logo and Title */}
        <div className="flex flex-row">
          <Image
            src={Icon}
            alt=""
            width={50}
            height={32}
            className="ml-20 mr-4"
          />
          <Link href="/">
            <h1 className="text-4xl mt-1 font-bold">Furniro</h1>
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-row ml-96 gap-20">
          <div className="flex flex-row">
            <Link href="/">
              <p className="mt-3 mr-10 text-lg">Home</p>
            </Link>
          </div>
          <div className="flex flex-row">
            <Link href="/shop">
              <p className="mt-3 mr-10 text-lg">Shop</p>
            </Link>
          </div>
          <div className="flex flex-row">
            <Link href="/blog">
              <p className="mt-3 mr-10 text-lg">Blog</p>
            </Link>
          </div>
          <div className="flex flex-row">
            <Link href="/contact">
              <p className="mt-3 mr-10 text-lg">Contact</p>
            </Link>
          </div>
          {/* Icons */}
          <div className="flex flex-row gap-8 pl-28">
            <Link href="/single_item/1">
              <Image
                src={Account_Icon}
                alt=""
                width={30}
                height={30}
                className="mt-2 mr-10"
              />
            </Link>
            <button
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Toggle search"
              aria-expanded={showSearch}
            >
              <Image
                src={Search_Icon}
                alt="Search Icon"
                width={30}
                height={30}
                className="mr-10"
              />
            </button>
            <Link href="/cart_sidebar/2">
              <Image
                src={Heart_Icon}
                alt=""
                width={30}
                height={30}
                className="mt-2 mr-10"
              />
            </Link>
            <div className="mt-1">
              <Sheet>
                <SheetTrigger>
                  <Image
                    src={Shopping_Cart_Icon}
                    alt=""
                    width={30}
                    height={30}
                    className="mt-1 mr-10"
                  />
                </SheetTrigger>
                <SheetContent>
                  <h1 className="text-2xl font-semibold">Shopping Cart</h1>
                  <div className="mt-8 mr-20">
                    <Divider />
                  </div>
                  <div className="flex flex-row mt-16">
                    <div className=" bg-[#F9F1E7] w-[110px] h-[110px] rounded-xl">
                      <Image
                        src="/sofa_5.svg"
                        alt=""
                        width={150}
                        height={150}
                        className="text-center"
                      />
                    </div>
                    <div className="flex flex-row">
                      <div className="flex flex-col ml-4 mt-5">
                        <h1 className="text-lg">Asgaard sofa</h1>
                        <div className="flex flex-row mt-3">
                          <h1 className="text-lg">1</h1>
                          <h1 className="mt-[2px] ml-3">x</h1>
                          <h1 className="text-[#B88E2F] mt-[2px] ml-3 font-medium">
                            Rs. 250,000.00
                          </h1>
                        </div>
                      </div>
                      <Image
                        src="cancel.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="ml-8"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mt-12">
                    <div className=" w-[110px] h-[110px] ">
                      <Image
                        src="/sofa_6.svg"
                        alt=""
                        width={150}
                        height={150}
                        className="text-center rounded-xl"
                      />
                    </div>
                    <div className="flex flex-row">
                      <div className="flex flex-col ml-4 mt-5">
                        <h1 className="text-lg">Casaliving Wood</h1>
                        <div className="flex flex-row mt-3">
                          <h1 className="text-lg">1</h1>
                          <h1 className="mt-[2px] ml-3">x</h1>
                          <h1 className="text-[#B88E2F] mt-[2px] ml-3 font-medium">
                            Rs. 270,000.00
                          </h1>
                        </div>
                      </div>
                      <Image
                        src="cancel.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="ml-8"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row text-lg mt-96">
                      <h1>Subtotal</h1>
                      <p className="text-[#B88E2F] ml-20">Rs. 520,000.00</p>
                    </div>
                    <div className="my-5">
                      <Divider />
                    </div>
                    <div className="flex flex-row">
                      <Link href="/cart">
                        <h1 className="border border-black rounded-3xl w-[90px] h-[30px] mt-2 flex justify-center items-center font-normal">
                          Cart
                        </h1>
                      </Link>
                      <Link href="/checkout">
                        <h1 className="border border-black rounded-3xl w-[110px] h-[30px] mt-2 flex justify-center items-center font-normal ml-4">
                          Checkout
                        </h1>
                      </Link>
                      <Link href="/product-compare">
                        <h1 className="border border-black rounded-3xl w-[130px] h-[30px] mt-2 flex justify-center items-center font-normal ml-4">
                          Comparison
                        </h1>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        {/* Search Bar */}
        {showSearch && (
          <div
            ref={searchBarRef}
            className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded shadow-md z-20 opacity-1 pointer-events-auto"
            role="search"
          >
            <SearchForm />
          </div>
        )}
      </div>

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

const Divider = () => {
  return <hr style={{ borderTop: "2px solid lightgrey" }}></hr>;
};