import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import the MemoryRouter
import Category from './Category';

test('renders category title correctly', () => {
  const category = 'Test Category';
  const { getByText } = render(
    <MemoryRouter>
      <Category category={category} />
    </MemoryRouter>
  );
  const titleElement = getByText(category);
  expect(titleElement).toBeInTheDocument();
});

test('renders category items correctly', () => {
  const category = 'Test Category';
  const data = {
    Brands: {
      Brand1: {},
      Brand2: {},
      Brand3: {},
    },
  };
  const { getByText } = render(
    <MemoryRouter>
      <Category category={category} data={data} />
    </MemoryRouter>
  );
  
  Object.keys(data?.Brands ?? {}).forEach((brand) => {
    const brandElement = getByText(brand);
    expect(brandElement).toBeInTheDocument();
  });
});
