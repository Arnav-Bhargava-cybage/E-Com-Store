import styled from "styled-components";
export const Tab = styled.button`
  width: 100%;
  font-size: 20px;
  padding: 20px 20px;
  cursor: pointer;
  opacity: 0.6;
  background-color: rgb(245,245,245);
  border: 0;
  outline: 0;
  &:focus {
    border-bottom: 2px solid blue;
    opacity: 1;
  }
 
`
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
 
`
export const Button1 = styled.button`
color: #fff;
display: inline-block;
text-decoration: none;
background-color: #0717ce;
padding: 4px 16px ;
margin: 12px 0px;
border-radius: 10px;
font-size: 14px;
font-weight:bolder;
transition: all 0.2s;
&:hover{
  transform: scale(1.1);
}
`