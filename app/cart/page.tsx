// app/cart/page.tsx
"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="poppins min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-64 bg-gray-100">
          <Image
            src="/shop_1.svg"
            alt="Cart Background"
            fill
            className="object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Shopping Cart
            </h1>
            <div className="flex items-center text-lg">
              <Link href="/" className="hover:text-[#B88E2F]">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-500">Cart</span>
            </div>
          </div>
        </div>

        {/* Cart Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-[#F9F1E7] p-4 hidden lg:grid grid-cols-5 gap-4 mb-4">
                <span className="col-span-2">Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-500">Your cart is empty</p>
                  <Link
                    href="/shop"
                    className="mt-4 inline-block bg-[#B88E2F] text-white px-6 py-2 rounded hover:bg-[#9a7627]"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col lg:grid lg:grid-cols-5 gap-4 items-center py-6 border-b"
                  >
                    <div className="col-span-2 flex items-center gap-4">
                      <div className="bg-[#F9F1E7] p-2 rounded-lg w-24 h-24">
                        <Image
                          src={item.imageurl.asset.url}
                          alt={item.title}
                          width={96}
                          height={96}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <button
                          onClick={() => removeFromCart(Number(item.id))}
                          className="text-red-500 hover:text-red-700 mt-2 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <p className="text-[#9F9F9F]">
                      Rs. {item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            Number(item.id),
                            Math.max(1, parseInt(e.target.value))
                          )
                        }
                        className="w-20 px-3 py-2 border rounded text-center"
                      />
                    </div>

                    <p className="font-medium">
                      Rs. {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Cart Summary */}
            <div className="lg:w-1/3">
              <div className="bg-[#F9F1E7] p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Cart Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>Rs. {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span className="text-[#B88E2F]">
                      Rs. {subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="mt-6 w-full bg-[#B88E2F] text-white py-3 rounded hover:bg-[#9a7627] transition-colors block text-center"
                >
                  Proceed to Checkout
                </Link>

                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="mt-4 w-full text-red-500 hover:text-red-700 transition-colors"
                  >
                    Clear Cart
                  </button>
                )}
              </div>

              <Link
                href="/shop"
                className="mt-4 inline-block bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
