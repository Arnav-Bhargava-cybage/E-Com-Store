import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


function Brand({ data, category, brand }) {
      return (
        <div>
          <h1>
            {category} - {brand}
          </h1>
          <ul>
            {Object.entries(data.Brands[brand]).map(([productName, productData]) => (
              <li key={productName}>
                <Link to={`/categories/${category}/${brand}/${productName}`}>{productName}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
export default Brand;