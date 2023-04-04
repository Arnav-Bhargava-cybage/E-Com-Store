import React, { useState } from 'react';
import styled from 'styled-components';
import products from '../data/Products.json';

const FiltersContainer = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
`;

const FilterSection = styled.div`
  margin-bottom: 10px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const FilterCheckbox = styled.input`
  margin-right: 5px;
`;

const FilterButton = styled.button`
  margin-top: 10px;
`;

const Filter = ({ onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999999);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      setSelectedCategories(selectedCategories.filter((name) => name !== categoryName));
    }
  };

  const handleBrandChange = (event) => {
    const brandName = event.target.value;
    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, brandName]);
    } else {
      setSelectedBrands(selectedBrands.filter((name) => name !== brandName));
    }
  };

  const handlePriceChange = (event, setter) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setter(value);
    }
  };

  const handleFilter = () => {
    onFilter({
      categories: selectedCategories,
      brands: selectedBrands,
      minPrice,
      maxPrice,
    });
  };

  return (
    <FiltersContainer>
      <FilterSection>
        <FilterLabel>Categories</FilterLabel>
        {Object.keys(products.categories).map((categoryName) => (
          <div key={categoryName}>
            <FilterCheckbox
              type="checkbox"
              id={`category-${categoryName}`}
              value={categoryName}
              onChange={handleCategoryChange}
            />
            <label htmlFor={`category-${categoryName}`}>{categoryName}</label>
          </div>
        ))}
      </FilterSection>
      <FilterSection>
        <FilterLabel>Brands</FilterLabel>
        {Object.keys(products.categories.TV.Brands).map((brandName) => (
          <div key={brandName}>
            <FilterCheckbox
              type="checkbox"
              id={`brand-${brandName}`}
              value={brandName}
              onChange={handleBrandChange}
            />
            <label htmlFor={`brand-${brandName}`}>{brandName}</label>
          </div>
        ))}
      </FilterSection>
      <FilterSection>
        <FilterLabel>Price Range</FilterLabel>
        <div>
          <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => handlePriceChange(e, setMinPrice)} />
          <span>-</span>
          <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => handlePriceChange(e, setMaxPrice)} />
        </div>
      </FilterSection>
      <FilterButton onClick={handleFilter}>Filter</FilterButton>
    </FiltersContainer>
  );
};

export default Filter;
