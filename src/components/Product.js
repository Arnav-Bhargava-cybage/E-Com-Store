import React from 'react';
import {Card,Image,Price,Rating,StarIcon,Discount} from './styledComponents/Index';

function Product({ data }) {
  const ratingStars = [];
  for (let i = 0; i < data.rating; i++) {
    ratingStars.push(<StarIcon key={i}>★</StarIcon>);
  }

  return (
    <Card>
      <Image src={data.image} alt={data.name} />
      <Price><strong>Price: ₹</strong> {data.price}</Price>
      <Rating>
        <strong>Rating:</strong> {ratingStars}
      </Rating>
      <Discount><strong>Discount:</strong> {data.discount}</Discount>
    </Card>
  );
}

export default Product;

