import React from 'react';

function Product({ data }) {
      return (
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <p>Price: {data.price}</p>
          <p>Rating: {data.rating}</p>
          <p>Discount: {data.discount}</p>
        </div>
      );
    }
    
    export default Product;