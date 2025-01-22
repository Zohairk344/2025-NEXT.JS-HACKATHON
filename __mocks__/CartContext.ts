// tests/__mocks__/CartContext.ts
export const useCart = () => ({
    cart: [],
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
  });