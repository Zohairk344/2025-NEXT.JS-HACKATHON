import { client } from "@/sanity/lib/client";
import CartSidebarClient from "./CartSidebarClient";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";

interface ProductDetailProps {
  params: { id: string };
}

export default async function Single_Item({ params }: ProductDetailProps) {
  const { id } = params;

  // Fetch the current product
  const fetchproduct = `*[_type == "product" && id == ${id}]{
    id,
    title,
    tags,
    description,
    price,
    discountprice,
    priceWithoutDiscount,
    imageurl{
      asset->{
        url
      }
    },
  }`;

  const products = await client.fetch<Product[]>(fetchproduct);
  const item = products[0];

  if (!item) {
    notFound(); // Redirect to the Next.js 404 page
  }

  // Fetch related products (e.g., products with the same tags)
  const fetchRelatedProducts = `*[_type == "product" && id != "${id}" && count(tags[@ in ["${item.tags.join('", "')}"]]) > 0]{
    id,
    title,
    tags,
    description,
    price,
    discountprice,
    priceWithoutDiscount,
    imageurl{
      asset->{
        url
      }
    },
  }`;

  const relatedProducts = await client.fetch<Product[]>(fetchRelatedProducts);

  return <CartSidebarClient item={item} relatedProducts={relatedProducts} />;
}