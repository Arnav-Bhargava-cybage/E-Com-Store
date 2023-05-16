import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';
import productData from './productData.json';

describe('Product', () => {
  it('renders the product image', () => {
    const { getByAltText } = render(<Product data={productData} />);
    const imageElement = getByAltText(productData.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain(productData.image);
  });

  it('renders the product price', () => {
    const { getByText } = render(<Product data={productData} />);
    const priceElement = getByText(/Price:/i);
    expect(priceElement).toBeInTheDocument();
    expect(priceElement.nextSibling.textContent.trim()).toBe(`₹ ${productData.price}`);
  });

  it('renders the product rating', () => {
    const { getByText } = render(<Product data={productData} />);
    const ratingElement = getByText(/Rating:/i);
    expect(ratingElement).toBeInTheDocument();
    expect(ratingElement.parentNode.textContent).toContain('★★★★');
  });

  it('renders the product discount', () => {
    const { getByText } = render(<Product data={productData} />);
    const discountElement = getByText(/Discount:/i);
    expect(discountElement).toBeInTheDocument();
    expect(discountElement.parentNode.textContent).toContain(productData.discount);
  });
});
