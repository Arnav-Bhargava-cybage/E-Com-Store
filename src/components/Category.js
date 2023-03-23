import React from 'react';
import {CategoryContainer,CategoryTitle,CategoryList,CategoryItem,CategoryLink} from './styledComponents/Index';

function Category({ data, category }) {
  return (
    <CategoryContainer>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryList>
        {Object.keys(data.Brands).map((brand) => (
          <CategoryItem key={brand}>
            <CategoryLink to={`/categories/${category}/${brand}`}>{brand}</CategoryLink>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryContainer>
  );
}

export default Category;
