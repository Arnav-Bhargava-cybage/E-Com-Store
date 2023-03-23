import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

export const BrandWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;

export const StyledLink = styled(Link)`
  color: #333;
  font-weight:700;
  font-size:20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #003396;
  }
`;