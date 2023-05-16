// import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Brand from './Brand';

// Test case 1: Rendering component with data
test('renders component with data', () => {
  const data = {
    Brands: {
      brand1: {
        product1: {},
        product2: {}
      },
      brand2: {
        product3: {},
        product4: {}
      }
    }
  };
  const category = 'Category1';
  const brand = 'brand1';

  const { getByText } = render(
    <MemoryRouter> {/* Wrap the component with MemoryRouter */}
      <Brand data={data} category={category} brand={brand} />
    </MemoryRouter>
  );

  expect(getByText('Category1 - brand1')).toBeInTheDocument();
  expect(getByText('product1')).toBeInTheDocument();
  expect(getByText('product2')).toBeInTheDocument();
});

// Test case 2: Rendering component with empty data
test('renders component with empty data', () => {
    const data = {
      Brands: {}
    };
    const category = 'Category2';
    const brand = 'brand2';
  
    const { getByText } = render(<Brand data={data} category={category} brand={brand} />);
  
    expect(getByText('Category2 - brand2')).toBeInTheDocument();
    expect(getByText('No products found')).toBeInTheDocument();
  });
  