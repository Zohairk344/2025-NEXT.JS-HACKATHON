// components/RelatedProducts.tsx
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { shuffleArray } from "@/utils/shuffleArray";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  // Shuffle the products array
  const shuffledProducts = shuffleArray(products);

  return (
    <div className="flex flex-col">
      {/* Heading */}
      <div className="flex justify-center mt-14 mb-10">
        <h1 className="text-3xl font-bold">Related Products</h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shuffledProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-12 mb-28">
        <button className="bg-white text-[#B88E2F] h-16 w-64 border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
          Show More
        </button>
      </div>
    </div>
  );
}