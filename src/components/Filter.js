import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import productsData from "../data/Products.json";
import Product from './Product';

const FilterContainer = styled.div`
  display: flex;
`;

const FilterSection = styled.div`
  width: 25%;
  padding: 20px;
`;

const ProductsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 75%;
  padding: 20px;
`;

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleBrandChange = (selectedOption) => {
    setSelectedBrand(selectedOption);
  };

  const handlePriceChange = (selectedOption) => {
    setSelectedPrice(selectedOption);
  };

  const categories = Object.keys(productsData.categories).map((category) => {
    return { value: category, label: category };
  });

  const brands = selectedCategory
    ? Object.keys(productsData.categories[selectedCategory.value].Brands).map(
        (brand) => {
          return { value: brand, label: brand };
        }
      )
    : [];

  const prices = selectedBrand
    ? Object.keys(
        productsData.categories[selectedCategory.value].Brands[
          selectedBrand.value
        ]
      ).map((product) => {
        return {
          value: productsData.categories[selectedCategory.value].Brands[
            selectedBrand.value
          ][product].price,
          label: productsData.categories[selectedCategory.value].Brands[
            selectedBrand.value
          ][product].price,
        };
      })
    : [];

  const filteredProducts =
    selectedPrice && selectedBrand && selectedCategory
      ? Object.keys(
          productsData.categories[selectedCategory.value].Brands[
            selectedBrand.value
          ]
        ).reduce((acc, product) => {
          if (
            productsData.categories[selectedCategory.value].Brands[
              selectedBrand.value
            ][product].price <= selectedPrice.value
          ) {
            acc.push(
              productsData.categories[selectedCategory.value].Brands[
                selectedBrand.value
              ][product]
            );
          }
          return acc;
        }, [])
      : [];

  return (
    <FilterContainer>
      <FilterSection>
        <Select
          placeholder="Select category"
          value={selectedCategory}
          options={categories}
          onChange={handleCategoryChange}
        />
        {selectedCategory && (
          <Select
            placeholder="Select brand"
            value={selectedBrand}
            options={brands}
            onChange={handleBrandChange}
          />
        )}
        {selectedBrand && (
          <Select
            placeholder="Select max price"
            value={selectedPrice}
            options={prices}
            onChange={handlePriceChange}
          />
        )}
      </FilterSection>
      <ProductsSection>
        {filteredProducts.map((product) => (
          <Product key={product.name} data={product} />
        ))}
      </ProductsSection>
    </FilterContainer>
  );
};

export default Filter;