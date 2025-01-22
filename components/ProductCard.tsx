// components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";
import AddToCartButton from "./addtocart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group my-7">
      {/* Product Image */}
      <div className="relative h-80">
        <Image
          src={urlFor(product.imageurl).url()}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-75 transition-opacity duration-300"
        />

        {/* Hover Actions */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-4">
            {/* Add to Cart */}
            <AddToCartButton product={product} />

            {/* Share, Like, Compare */}
            <div className="flex gap-6">
              {/* Share Icon */}
              <Link href={`/single_item/${product.id}`}className="flex flex-row text-white hover:text-[#B88E2F] transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 16c-.79 0-1.5.31-2.03.81L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.53.5 1.24.81 2.03.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.51 9.31 6.8 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.8 0 1.51-.31 2.04-.81l7.05 4.11c-.05.23-.09.46-.09.7 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                <h1>Share</h1>
              </Link>

              {/* Like Icon */}
              <Link href={`/cart_sidebar/${product.id}`} className="flex flex-row text-white hover:text-[#B88E2F] transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <h1>Like</h1>
              </Link>

              {/* Compare Icon */}
              <Link href="/product-compare" className="flex flex-row text-white hover:text-[#B88E2F] transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                </svg>
                <h1>Compare</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">{product.title}</h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#B88E2F] mt-1 ml-1">
            Rp {product.price}
          </span>
          {product.discountprice && (
            <span className="text-gray-500 line-through mt-2">
              Rp {product.discountprice + product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}