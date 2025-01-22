// app/checkout/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useCart } from "@/components/CartContext";
import { Loader2 } from "lucide-react";

export default function Checkout() {
  const router = useRouter();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [error, setError] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePlaceOrder = async () => {
    try {
      setIsPlacingOrder(true);
      setError("");

      // Validate payment method selection
      if (!selectedPaymentMethod) {
        setError("Please select a payment method.");
        return;
      }

      // Simulate order processing (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear cart and redirect to order confirmation page
      clearCart();
      router.push("/order-confirmed");
    } catch (err) {
      setError("Failed to place order. Please try again.");
      console.error(err);
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <div className="poppins">
      <Header />

      {/* Hero Section */}
      <div className="hero relative h-64 md:h-96">
        <Image src="/shop_1.svg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Image
            src="/Meubel_House_Logos-05.svg"
            alt=""
            width={80}
            height={80}
            className="mb-2"
          />
          <h1 className="text-4xl md:text-5xl font-bold">Checkout</h1>
          <div className="flex flex-row pt-6">
            <h1 className="text-lg font-medium">Home </h1>
            <Image
              src="/right_arrow.svg"
              alt=""
              width={10}
              height={10}
              className="ml-2"
            />
            <h1 className="text-lg ml-2 font-light"> Checkout</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Billing Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-semibold text-3xl md:text-4xl mt-8 lg:mt-28">
            Billing details
          </h1>

          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="flex-1">
              <h2 className="text-lg font-medium">First Name</h2>
              <input
                type="text"
                className="w-full h-12 md:h-[75px] mt-4 border border-[#9F9F9F] rounded-xl p-4"
                required
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-medium">Last Name</h2>
              <input
                type="text"
                className="w-full h-12 md:h-[75px] mt-4 border border-[#9F9F9F] rounded-xl p-4"
                required
              />
            </div>
          </div>

          {/* Other Fields */}
          {[
            { label: "Company Name (Optional)", width: "w-full" },
            { label: "Country / Region", width: "w-full", placeholder: "Sri Lanka" },
            { label: "Street Address", width: "w-full" },
            { label: "Town / City", width: "w-full" },
            { label: "Province", width: "w-full", placeholder: "Western Province" },
            { label: "ZIP Code", width: "w-full" },
            { label: "Phone", width: "w-full" },
            { label: "Email Address", width: "w-full" },
          ].map((field, index) => (
            <div key={index} className="mt-8">
              <h2 className="text-lg font-medium">{field.label}</h2>
              <input
                type="text"
                placeholder={field.placeholder || ""}
                className={`${field.width} h-12 md:h-[75px] mt-4 border border-[#9F9F9F] rounded-xl p-4`}
                required={!field.label.includes("Optional")}
              />
            </div>
          ))}

          {/* Additional Info */}
          <div className="mt-8">
            <h2 className="text-lg font-medium">Additional information</h2>
            <input
              type="text"
              placeholder="Additional information"
              className="w-full h-12 md:h-[75px] mt-4 border border-[#9F9F9F] rounded-xl p-4"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-40">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <h1 className="text-lg md:text-2xl font-medium">Product</h1>
              <h1 className="text-lg md:text-2xl font-medium">Subtotal</h1>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-row justify-between text-lg mt-6"
              >
                <h1 className="text-[#9F9F9F]">{item.title}</h1>
                <p className="font-medium">
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}

            {/* Totals */}
            <div className="flex flex-row justify-between text-lg mt-6">
              <h1>Subtotal</h1>
              <h1>Rs. {cartTotal.toFixed(2)}</h1>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <h1 className="text-lg">Total</h1>
              <h1 className="text-2xl text-[#B88E2F] font-bold">
                Rs. {cartTotal.toFixed(2)}
              </h1>
            </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <hr className="border-t-2 border-gray-200" />
            </div>

            {/* Payment Options */}
            <div className="mt-8">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="direct-bank-transfer"
                  name="payment-method"
                  value="direct-bank-transfer"
                  checked={selectedPaymentMethod === "direct-bank-transfer"}
                  onChange={() => setSelectedPaymentMethod("direct-bank-transfer")}
                  className="w-4 h-4"
                />
                <label htmlFor="direct-bank-transfer" className="text-lg">
                  Direct Bank Transfer
                </label>
              </div>
              <p className="text-lg font-light text-[#9F9F9F] mt-4">
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference.
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="credit-debit-card"
                  name="payment-method"
                  value="credit-debit-card"
                  checked={selectedPaymentMethod === "credit-debit-card"}
                  onChange={() => setSelectedPaymentMethod("credit-debit-card")}
                  className="w-4 h-4"
                />
                <label htmlFor="credit-debit-card" className="text-lg text-[#9F9F9F]">
                  Credit/Debit Card
                </label>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="cash-on-delivery"
                  name="payment-method"
                  value="cash-on-delivery"
                  checked={selectedPaymentMethod === "cash-on-delivery"}
                  onChange={() => setSelectedPaymentMethod("cash-on-delivery")}
                  className="w-4 h-4"
                />
                <label htmlFor="cash-on-delivery" className="text-lg text-[#9F9F9F]">
                  Cash On Delivery
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              disabled={isPlacingOrder}
              className={`mt-8 w-full md:w-[320px] h-12 md:h-16 border border-black rounded-xl text-center ${
                isPlacingOrder ? "bg-gray-300" : "hover:bg-[#B88E2F] hover:text-white"
              } transition-colors flex items-center justify-center gap-2`}
            >
              {isPlacingOrder ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  Placing Order...
                </>
              ) : (
                "Place Order"
              )}
            </button>

            {error && (
              <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
          {[
            {
              icon: "/trophy1.svg",
              title: "High Quality",
              text: "crafted from top materials",
            },
            {
              icon: "/tick.svg",
              title: "Warranty Protection",
              text: "Over 2 years",
            },
            {
              icon: "/free_ship.svg",
              title: "Free Shipping",
              text: "Order over 150 $",
            },
            {
              icon: "/support.svg",
              title: "24 / 7 Support",
              text: "Dedicated support",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-row items-center">
              <Image src={feature.icon} alt="" width={70} height={70} />
              <div className="ml-4">
                <h1 className="text-2xl font-semibold">{feature.title}</h1>
                <h2 className="text-xl text-[#898989] font-medium mt-2">
                  {feature.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}