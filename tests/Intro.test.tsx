import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import Intro from '@/components/intro';

describe('Intro', () => {
  it('renders the intro section with a call-to-action button', () => {
    render(<Intro />);

    // Check if the title and button are rendered
    expect(screen.getByText('Discover Our New Collection')).toBeInTheDocument();
    expect(screen.getByText('BUY NOW')).toBeInTheDocument();
  });
});