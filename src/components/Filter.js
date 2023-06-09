import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { Routes, Route, useNavigate } from "react-router-dom";
import productsData from "../data/Products.json";
import Product from "./Product";
import Home from "./Home";

const FilterContainer = styled.div`
  display: flex;
  margin-top: 24px;
  height: 100%;
`;

const FilterSection = styled.div`
  display: flex;
  height: 450px;
  flex-direction: column;
  justify-content: space-evenly;
  width: 25%;
  padding: 20px;
  background-color: #ffff64;
  border: 4px solid #ccc;
  border-radius: 10px;

  label {
    color: #0717ce;
    font-weight: bold;
    font-size: 18px;
  }
  select {
    font-weight: bold;
  }
`;

const ProductsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  padding: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 5px;
  width: 95%;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 16px;
  background-color: #0717ce;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
`;

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noProductsFound, setNoProductsFound] = useState(false);
  const [selectedMinPrice, setSelectedMinPrice] = useState(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(null);
  const [reset, setReset] = useState(false);
  const navigate = useNavigate();

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleBrandChange = (selectedOption) => {
    setSelectedBrand(selectedOption);
  };

  const handlePriceRangeChange = (minPrice, maxPrice) => {
    setSelectedMinPrice(minPrice);
    setSelectedMaxPrice(maxPrice);

    if (selectedCategory && selectedBrand) {
      const categoryData = productsData.categories[selectedCategory.value];
      const brandData =
        categoryData && categoryData.Brands
          ? categoryData.Brands[selectedBrand.value]
          : null;

      if (brandData) {
        const filteredProducts = Object.values(brandData).filter(
          (product) =>
            (!minPrice || product.price >= minPrice) &&
            (!maxPrice || product.price <= maxPrice)
        );

        if (filteredProducts.length === 0) {
          setNoProductsFound(true);
        } else {
          setNoProductsFound(false);
        }

        navigate("/products");
        setFilteredProducts(filteredProducts);
      } else {
        setNoProductsFound(true);
        setFilteredProducts([]);
      }
    }
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setFilteredProducts([]);
    setSelectedMinPrice(null);
    setSelectedMaxPrice(null);
    setReset(true);
    setTimeout(() => setReset(false), 100);
  };

  const categories = Object.keys(productsData.categories).map((category) => {
    return { value: category, label: category };
  });

  const brands = selectedCategory
    ? Object.keys(
        productsData.categories[selectedCategory?.value]?.Brands || {}
      ).map((brand) => {
        return { value: brand, label: brand };
      })
    : [];

  const prices = selectedBrand
    ? Object.keys(
        productsData.categories[selectedCategory?.value]?.Brands?.[
          selectedBrand?.value
        ] || {}
      ).map((product) => {
        return {
          value:
            productsData.categories[selectedCategory?.value]?.Brands?.[
              selectedBrand?.value
            ]?.[product]?.price,
          label:
            productsData.categories[selectedCategory?.value]?.Brands?.[
              selectedBrand?.value
            ]?.[product]?.price,
        };
      })
    : [];

  return (
    <FilterContainer>
      <FilterSection>
        <div>
          <Label>Select category:</Label>
          <Select
            placeholder="Select category"
            value={selectedCategory}
            options={categories}
            onChange={handleCategoryChange}
          />
        </div>
        <div>
          <Label>Select brand:</Label>
          <Select
            placeholder="Select brand"
            value={selectedBrand}
            options={brands}
            onChange={handleBrandChange}
          />
        </div>
        <div>
          <Label>Price Range:</Label>
          <Input
            type="number"
            placeholder="Minimum Price"
            value={selectedMinPrice}
            onChange={(e) => setSelectedMinPrice(parseInt(e.target.value))}
          />
          <Input
            type="number"
            placeholder="Maximum Price"
            value={selectedMaxPrice}
            onChange={(e) => setSelectedMaxPrice(parseInt(e.target.value))}
          />
        </div>
        <div>
          <Button
            onClick={() =>
              handlePriceRangeChange(selectedMinPrice, selectedMaxPrice)
            }
          >
            Apply
          </Button>
          <Button style={{ marginLeft: "16px" }} onClick={handleReset}>
            Reset
          </Button>
        </div>
      </FilterSection>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            // <ProductsSection>
            //   {filteredProducts.map((product) => (
            //     <Product key={product.name} data={product} />
            //   ))}
            // </ProductsSection>
            <ProductsSection>
              {filteredProducts.length === 0 && noProductsFound && (
                <p>No products found</p>
              )}

              {filteredProducts.map((product) => (
                <Product key={product.name} data={product} />
              ))}
            </ProductsSection>
          }
        />
      </Routes>
    </FilterContainer>
  );
};

export default Filter;
