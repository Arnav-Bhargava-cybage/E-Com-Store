import React from 'react';
import {BrandWrapper,Title,List,ListItem,StyledLink} from './styledComponents/Index';


function Brand({ data, category, brand }) {
  return (
    <BrandWrapper>
      <Title>
        {category} - {brand}
      </Title>
      <List>
        {Object.entries(data.Brands[brand]).map(([productName, productData]) => (
          <ListItem key={productName}>
            <StyledLink to={`/categories/${category}/${brand}/${productName}`}>{productName}</StyledLink>
          </ListItem>
        ))}
      </List>
    </BrandWrapper>
  );
}

export default Brand;
