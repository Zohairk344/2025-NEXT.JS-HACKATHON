// app/order-confirmed/page.tsx
'use client';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmed() {
  const [orderNumber, setOrderNumber] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  useEffect(() => {
    // Generate random order number
    const number = `#${Math.floor(Date.now() * Math.random())}`.slice(0, 10);
    setOrderNumber(number);
    
    // Calculate delivery date (3-5 business days)
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 3) + 3);
    setDeliveryDate(date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col poppins">
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 text-center">
          {/* Animated Checkmark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <CheckCircle className="h-32 w-32 text-[#B88E2F] mx-auto" strokeWidth={1} />
          </motion.div>

          {/* Order Confirmation Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600">
              Thank you for your purchase. Your order is being processed.
            </p>
          </motion.div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto"
          >
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-medium">{deliveryDate}</span>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  We have sent a confirmation email with order details.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/shop"
              className="px-8 py-3 bg-[#B88E2F] text-white rounded-lg hover:bg-[#9a7627] transition-colors font-medium"
            >
              Continue Shopping
            </Link>
            <button className="px-8 py-3 border-2 border-[#B88E2F] text-[#B88E2F] rounded-lg hover:bg-[#FFF3E3] transition-colors font-medium">
              View Order Details
            </button>
          </motion.div>

          {/* Support Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-gray-600"
          >
            <p>Need help? <a href="/contact" className="text-[#B88E2F] hover:underline">Contact our support team</a></p>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🚚',
              title: 'Fast Shipping',
              text: 'Track your order in real-time'
            },
            {
              icon: '🛡️',
              title: 'Secure Payment',
              text: '256-bit SSL encryption'
            },
            {
              icon: '📞',
              title: '24/7 Support',
              text: 'Dedicated customer service'
            },
            {
              icon: '💳',
              title: 'Easy Returns',
              text: '30-day return policy'
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-4xl">{feature.icon}</span>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}