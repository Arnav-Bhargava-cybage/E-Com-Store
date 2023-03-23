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
  background-color: #dcffeb;
  border-bottom: 4px solid #ccc;
  border-top: 4px solid #ccc;
}

li {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #98ffc5;
  }
  &:first-child{
    background-color:transparent;
  }
}
`;

export const Main = styled.main`
margin: 20px;
`;

