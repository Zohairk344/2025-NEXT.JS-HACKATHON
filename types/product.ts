export interface Product {
  id: number | string;
  title: string;
  tags: string[];
  description: string;
  price: number;
  discountprice?: number;
  priceWithoutDiscount?: number;
  imageurl: {
    asset: {
      url: string;
    };
  };
  quantity?: number;
}