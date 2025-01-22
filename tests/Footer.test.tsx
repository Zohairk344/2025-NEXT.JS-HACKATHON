import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import Footer from '@/components/footer';

describe('Footer', () => {
  it('renders the footer with links and newsletter section', () => {
    render(<Footer />);

    // Check if the footer title is rendered
    expect(screen.getByText('Funiro.')).toBeInTheDocument();

    // Check if links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Check if the newsletter section is rendered
    expect(screen.getByPlaceholderText('Enter Your Email Address')).toBeInTheDocument();
  });
});