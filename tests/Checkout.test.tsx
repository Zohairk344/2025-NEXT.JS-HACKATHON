// tests/Checkout.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Checkout from '@/app/checkout/page';
import { useCart } from '@/components/CartContext';

// Mock the useCart hook
jest.mock('@/components/CartContext');

describe('Checkout', () => {
  it('renders the checkout page', () => {
    // Mock the cart context
    (useCart as jest.Mock).mockReturnValue({
      cartItems: [],
      cartTotal: 0,
      clearCart: jest.fn(),
    });

    // Render the component
    render(<Checkout />);

    // Assert that the page renders correctly
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });

  it('displays cart items', () => {
    // Mock the cart context with items
    (useCart as jest.Mock).mockReturnValue({
      cartItems: [
        { id: 1, title: 'Product 1', price: 100, quantity: 2 },
        { id: 2, title: 'Product 2', price: 200, quantity: 1 },
      ],
      cartTotal: 400,
      clearCart: jest.fn(),
    });

    // Render the component
    render(<Checkout />);

    // Assert that cart items are displayed
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Rs. 400.00')).toBeInTheDocument();
  });

  it('handles order placement', async () => {
    // Mock the cart context
    (useCart as jest.Mock).mockReturnValue({
      cartItems: [{ id: 1, title: 'Product 1', price: 100, quantity: 1 }],
      cartTotal: 100,
      clearCart: jest.fn(),
    });

    // Render the component
    render(<Checkout />);

    // Click the "Place Order" button
    fireEvent.click(screen.getByText('Place Order'));

    // Assert that the loading state is displayed
    expect(screen.getByText('Placing Order...')).toBeInTheDocument();
  });
});