import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function Category({ data, category }) {
      return (
        <div>
          <h1>{category}</h1>
          <ul>
            {Object.keys(data.Brands).map((brand) => (
              <li key={brand}>
                <Link to={`/categories/${category}/${brand}`}>{brand}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }

export default Category