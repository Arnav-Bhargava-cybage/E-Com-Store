import styled from 'styled-components';

export const Nav = styled.nav`
ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 64px;
  justify-content: space-around;
  align-items:center;
  background-color: #ffff54;
  border-bottom: 4px solid #ccc;
  border-top: 4px solid #ccc;
}

li {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:first-child{
    background-color:transparent;
  }
}

li a{
  text-decoration:none;
  color:#0717ce;
  font-size:24px;
  &:hover {
    color:blue;
  }
}
`;

export const Main = styled.main`
margin: 20px;
`;

