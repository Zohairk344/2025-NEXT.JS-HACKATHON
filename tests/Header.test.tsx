import React from 'react'; // Add this line
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/header';

describe('Header', () => {
  it('renders the header with logo and navigation links', () => {
    render(<Header />);

    // Check if the logo is rendered
    expect(screen.getByText('Furniro')).toBeInTheDocument();

    // Check if navigation links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('toggles the search bar when the search icon is clicked', () => {
    render(<Header />);

    // Click the search icon
    const searchIcon = screen.getByLabelText('Toggle search');
    fireEvent.click(searchIcon);

    // Check if the search bar is visible
    expect(screen.getByRole('search')).toBeInTheDocument();
  });
});