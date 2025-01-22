// components/ProductImages.tsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";

interface ProductImagesProps {
  product: Product;
}

export default function ProductImages({ product }: ProductImagesProps) {
  return (
    <div className="flex flex-row">
      {/* Thumbnails */}
      <div className="flex flex-col">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="w-20 h-24 bg-[#F9F1E7] rounded-xl mt-12 ml-40"
          >
            <Image
              src={urlFor(product.imageurl).url()}
              alt={`Thumbnail ${index}`}
              width={150}
              height={150}
              className="text-center"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="bg-[#F9F1E7] w-[550px] h-[600px] ml-12 mt-12 rounded-xl">
        <Image
          src={urlFor(product.imageurl).url()}
          alt={product.title}
          width={900}
          height={700}
          className="my-8 px-0"
        />
      </div>
    </div>
  );
}