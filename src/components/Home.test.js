import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  it('renders the home title correctly', () => {
    const { getByText } = render(<Home />);
    const homeTitle = getByText('Welcome To Our E-Store');
    expect(homeTitle).toBeInTheDocument();
  });

  it('renders the product description correctly', () => {
    const { getByText } = render(<Home />);
    const productDescription = getByText('Explore our selection of products...');
    expect(productDescription).toBeInTheDocument();
  });
});
