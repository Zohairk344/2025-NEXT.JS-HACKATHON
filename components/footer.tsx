import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="poppins border-t-2">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h1 className="text-2xl font-bold">Funiro.</h1>
          <p className="text-[#9F9F9F] text-lg mt-8">
            400 University Drive Suite 200 Coral Gables,
          </p>
          <p className="text-[#9F9F9F] text-lg">FL 33134 USA</p>
        </div>

        <div>
          <h1 className="text-lg text-[#9F9F9F]">Links</h1>
          <Link href="/">
            <h1 className="my-4 text-lg">Home</h1>
          </Link>
          <Link href="/shop">
            <h1 className="my-4 text-lg">Shop</h1>
          </Link>
          <Link href="/about">
            <h1 className="my-4 text-lg">About</h1>
          </Link>
          <Link href="/contact">
            <h1 className="my-4 text-lg">Contact</h1>
          </Link>
        </div>

        <div>
          <h1 className="text-lg text-[#9F9F9F]">Help</h1>
          <h1 className="my-4 text-lg">Payment Options</h1>
          <h1 className="my-4 text-lg">Returns</h1>
          <h1 className="my-4 text-lg">Privacy Policies</h1>
        </div>

        <div>
          <h1 className="text-lg text-[#9F9F9F]">Newsletter</h1>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-black border-b-2"
            />
            <h1 className="border-black border-b-2">SUBSCRIBE</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <hr className="border-t-2 border-lightgrey" />
      </div>

      <h1 className="text-lg text-center my-8">
        2023 furino. All rights reserved
      </h1>
    </div>
  );
};

export default Footer;