import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Header from '@/components/header';
import ProductCard from '@/components/ProductCard';
import { client } from '@/sanity/lib/client';
import Present_1 from '@/public/image_1.svg';
import Present_2 from '@/public/image_2.svg';
import Present_3 from '@/public/image_3.svg';
import Products from '@/public/Products.svg';
import Funiro from '@/public/Funiro.svg';

// Lazy load heavy components
const LazyIntro = dynamic(() => import('@/components/intro'), { suspense: true });
const LazyFooter = dynamic(() => import('@/components/footer'), { suspense: true });

/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function Home() {
  let products = [];

  try {
    const fetchproduct = `*[_type == "product"]{
      id,
      title,
      tags,
      description,
      price,
      discountprice,
      priceWithoutDiscount,
      imageurl {
        asset->{
          url
        }
      }
    }`;
    products = await client.fetch(fetchproduct);
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }

  return (
    <div className="poppins">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyIntro />
      </Suspense>

      <div className="bg-white flex flex-col items-center my-16 px-4">
        <h1 className="text-2xl md:text-4xl text-center">Browse The Range</h1>
        <p className="text-lg mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <Image
            src={Present_1}
            alt="Dining"
            width={430}
            height={540}
            className="rounded-xl w-full md:w-auto"
            priority // Prioritize loading above-the-fold images
          />
          <Image
            src={Present_2}
            alt="Living"
            width={430}
            height={540}
            className="rounded-xl w-full md:w-auto"
            priority // Prioritize loading above-the-fold images
          />
          <Image
            src={Present_3}
            alt="Bedroom"
            width={430}
            height={540}
            className="rounded-xl w-full md:w-auto"
            priority // Prioritize loading above-the-fold images
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-[400px] mt-12 text-2xl font-semibold text-center">
          <h1>Dining</h1>
          <h1>Living</h1>
          <h1>Bedroom</h1>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mt-16 text-center">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.slice(0, 9).map((item: any) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <Link href="/shop">
          <button className="bg-white text-[#B88E2F] h-16 w-64 border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors duration-300 mt-8">
            Show More
          </button>
        </Link>
      </div>

      <div className="flex justify-between items-center h-screen bg-[#FCF8F3]">
        <div className="w-1/4 mx-36">
          <h1 className="text-5xl font-bold w-[500px]">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-lg mt-4 text-[#616161] w-[490px]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F] text-white h-12 w-44 mt-9">
            Explore More
          </button>
        </div>
        <div className="w-3/4">
          <Image
            src={Products}
            alt="Products"
            width={1920}
            height={1200}
            priority // Prioritize loading above-the-fold images
          />
        </div>
      </div>

      <div className="bg-white flex flex-col items-center my-16">
        <h1 className="text-[20px] text-[#616161] font-semibold">
          Share your setup with
        </h1>
        <h2 className="text-[40px] font-bold">#FuniroFurniture</h2>
        <Image
          src={Funiro}
          alt="Funiro"
          width={1920}
          height={1200}
          priority // Prioritize loading above-the-fold images
        />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <LazyFooter />
      </Suspense>
    </div>
  );
}