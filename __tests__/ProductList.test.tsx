// __tests__/ProductList.test.tsx
import { render, screen } from '@testing-library/react';
import ProductList from '@/components/ProductList';

describe('ProductList', () => {
  it('renders product list', () => {
    const products = [{ id: 1, title: 'Product 1', price: 100 }];
    render(<ProductList products={products} />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });
});