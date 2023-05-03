import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { Routes, Route, useNavigate } from 'react-router-dom';
import productsData from "../data/Products.json";
import Product from './Product';

const FilterContainer = styled.div`
  display: flex;
`;

const FilterSection = styled.div`
  width: 25%;
  padding: 20px;
  background-color:#dcffeb;
  border: 4px solid #ccc;
  border-radius:10px;
`;

const ProductsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  padding: 20px;

`;


const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 95%;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-weight:bold;
  font-size: 14px;
  background-color: blue;
  border-radius:10px;
  color: #fff;
  cursor: pointer;
`;


const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedMinPrice, setSelectedMinPrice] = useState(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(null);
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
      const filteredProducts = Object.keys(
        productsData.categories[selectedCategory.value].Brands[
          selectedBrand.value
        ]
      )
        .map((product) => {
          return productsData.categories[selectedCategory.value].Brands[          selectedBrand.value        ][product];
        })
        .filter(
          (product) =>
            (!minPrice || product.price >= minPrice) &&
            (!maxPrice || product.price <= maxPrice)
        );
      navigate('/products');
      setFilteredProducts(filteredProducts);
    }
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

  return (
//     <FilterContainer>
//       <FilterSection>
//         <Select
//           placeholder="Select category"
//           value={selectedCategory}
//           options={categories}
//           onChange={handleCategoryChange}
//         />
//         {selectedCategory && (
//           <Select
//             placeholder="Select brand"
//             value={selectedBrand}
//             options={brands}
//             onChange={handleBrandChange}
//           />
//         )}

// {selectedBrand && (
//   <>
//     <label>Price Range:</label>
//     <input
//       type="number"
//       placeholder="Minimum Price"
//       value={selectedMinPrice}
//       onChange={(e) =>
//         setSelectedMinPrice(parseInt(e.target.value))
//       }
//     />
//     <input
//       type="number"
//       placeholder="Maximum Price"
//       value={selectedMaxPrice}
//       onChange={(e) =>
//         setSelectedMaxPrice(parseInt(e.target.value))
//       }
//     />
//     <button
//       onClick={() =>
//         handlePriceRangeChange(
//           selectedMinPrice,
//           selectedMaxPrice
//         )
//       }
//     >
//       Apply
//     </button>
//   </>
// )}

//       </FilterSection>
//       <Routes>
//         <Route path="/products" element={<ProductsSection>
//           {filteredProducts.map((product) => (
//             <Product key={product.name} data={product} />
//           ))}
//         </ProductsSection>} />
//       </Routes>
//     </FilterContainer>

<FilterContainer>
      <FilterSection>
        <Label>Select category:</Label>
        <Select
          placeholder="Select category"
          value={selectedCategory}
          options={categories}
          onChange={handleCategoryChange}
        />
        {selectedCategory && (
          <>
            <Label>Select brand:</Label>
            <Select
              placeholder="Select brand"
              value={selectedBrand}
              options={brands}
              onChange={handleBrandChange}
            />
          </>
        )}

        {selectedBrand && (
          <>
            <Label>Price Range:</Label>
            <Input
              type="number"
              placeholder="Minimum Price"
              value={selectedMinPrice}
              onChange={(e) =>
                setSelectedMinPrice(parseInt(e.target.value))
              }
            />
            <Input
              type="number"
              placeholder="Maximum Price"
              value={selectedMaxPrice}
              onChange={(e) =>
                setSelectedMaxPrice(parseInt(e.target.value))
              }
            />
            <Button
              onClick={() =>
                handlePriceRangeChange(
                  selectedMinPrice,
                  selectedMaxPrice
                )
              }
            >
              Apply
            </Button>
          </>
        )}
      </FilterSection>
      <Routes>
        <Route
          path="/products"
          element={
            <ProductsSection>
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

