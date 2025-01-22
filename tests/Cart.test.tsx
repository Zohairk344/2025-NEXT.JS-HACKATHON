// tests/Cart.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import CartPage from '@/app/cart/page';
import { CartProvider } from '@/components/CartContext';

describe('Cart', () => {
  it('renders the cart page with empty state', () => {
    render(
      <CartProvider
        value={{
          cartItems: [],
          addToCart: jest.fn(),
          removeFromCart: jest.fn(),
          updateQuantity: jest.fn(),
          clearCart: jest.fn(),
          cartTotal: 0,
          cartCount: 0,
        }}
      >
        <CartPage />
      </CartProvider>
    );

    // Check if the empty cart message is displayed
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /continue shopping/i })
    ).toBeInTheDocument();
  });

  it('displays cart items and allows quantity update', () => {
    const mockCartItems = [
      {
        id: 1,
        title: 'Product 1',
        price: 100,
        discountprice: 80,
        quantity: 2,
        imageurl: { asset: { url: '/product1.jpg' } },
        tags: ['tag1', 'tag2'], // Add missing properties
        description: 'This is a sample product description.', // Add missing properties
      },
    ];

    render(
      <CartProvider
        value={{
          cartItems: mockCartItems,
          addToCart: jest.fn(),
          removeFromCart: jest.fn(),
          updateQuantity: jest.fn(),
          clearCart: jest.fn(),
          cartTotal: 160, // 2 items * 80 (discountprice)
          cartCount: 2,
        }}
      >
        <CartPage />
      </CartProvider>
    );

    // Check if the cart item is displayed
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Rs. 80.00')).toBeInTheDocument();
    expect(screen.getByText('Rs. 160.00')).toBeInTheDocument();

    // Simulate updating the quantity
    const quantityInput = screen.getByRole('spinbutton');
    fireEvent.change(quantityInput, { target: { value: '3' } });

    // Check if the quantity is updated
    expect(quantityInput).toHaveValue(3);
  });
});