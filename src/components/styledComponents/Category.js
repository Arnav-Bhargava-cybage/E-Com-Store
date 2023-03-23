import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color:#0200b9;
`;

export const CategoryList = styled.ul`
  list-style: none;
  font-size: 1.5rem;
  font-weight:700;
  padding: 0;
  margin: 0;
`;

export const CategoryItem = styled.li`
  margin: 1rem 0;
`;

export const CategoryLink = styled(Link)`
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #003396;
    text-decoration: underline;
  }
`;