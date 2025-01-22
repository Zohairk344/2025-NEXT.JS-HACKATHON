import React from "react";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="hero relative h-screen">
      {/* Background Image */}
      <Image
        src="/background_1.svg"
        alt="Background"
        fill
        className="object-cover z-0" // Ensure the image is behind the content
      />

      {/* Content */}
      <div className="container mx-auto h-full flex flex-col md:flex-row justify-between items-center px-4 relative z-10">
        {/* Left Side (Empty) */}
        <div className="w-1/2 hidden md:block"></div>

        {/* Right Side (Text and Button) */}
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="bg-[#FFF3E3] px-12 py-12 rounded-lg max-w-xl">
            <p className="text-lg">New Arrival</p>
            <h1 className="text-4xl md:text-5xl mt-2 font-bold text-[#B88E2F]">
              Discover Our New Collection
            </h1>
            <p className="text-lg mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <Link href="/shop">
              <button className="mt-8 bg-[#B88E2F] px-12 py-6 font-bold text-white">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;