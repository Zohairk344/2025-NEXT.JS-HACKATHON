import { client } from "@/sanity/lib/client";

export default async function ShopID(){
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
    
      const products = await client.fetch(fetchproduct);

      return products.id
}