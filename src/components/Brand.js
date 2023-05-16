import React from 'react';
import {BrandWrapper,Title,List,ListItem,StyledLink} from './styledComponents/Index';

function Brand({ data, category, brand }) {
  const brandData = data.Brands[brand];

  return (
    <BrandWrapper>
      <Title>
        {category} - {brand}
      </Title>
      <List>
        {brandData
          ? Object.entries(brandData).map(([productName, productData]) => (
              <ListItem key={productName}>
                <StyledLink to={`/categories/${category}/${brand}/${productName}`}>
                  {productName}
                </StyledLink>
              </ListItem>
            ))
          : <ListItem>No products found</ListItem>
        }
      </List>
    </BrandWrapper>
  );
}
export default Brand;
