"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Icon from "@/public/Meubel_House_Logos-05.svg";
import Account_Icon from "@/public/Vector.svg";
import Search_Icon from "@/public/icons_search.svg";
import Heart_Icon from "@/public/icons_heart.svg";
import Shopping_Cart_Icon from "@/public/shopping_cart.svg";
import Link from "next/link";
import SearchForm from "./SearchForm";

const Header = () => {
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
    <div className="flex flex-col md:flex-row justify-between items-center py-4 poppins bg-white relative px-4 md:px-20">
      {/* Logo and Title */}
      <div className="flex items-center">
        <Image src={Icon} alt="" width={50} height={32} className="mr-4" />
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">Furniro</h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20 mt-4 md:mt-0">
        <Link href="/">
          <p className="text-lg">Home</p>
        </Link>
        <Link href="/shop">
          <p className="text-lg">Shop</p>
        </Link>
        <Link href="/blog">
          <p className="text-lg">Blog</p>
        </Link>
        <Link href="/contact">
          <p className="text-lg">Contact</p>
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 space-x-10 md:gap-8 mt-4 md:mt-0">
        <Link href="/single_item/1">
          <Image src={Account_Icon} alt="" width={30} height={30} />
        </Link>
        <button
          onClick={() => setShowSearch(!showSearch)}
          aria-label="Toggle search"
          aria-expanded={showSearch}
        >
          <Image src={Search_Icon} alt="Search Icon" width={30} height={30} />
        </button>
        <Link href="/cart_sidebar/2">
          <Image src={Heart_Icon} alt="" width={30} height={30} />
        </Link>
        <Link href="/cart">
          <Image src={Shopping_Cart_Icon} alt="" width={30} height={30} />
        </Link>
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
  );
};

export default Header;