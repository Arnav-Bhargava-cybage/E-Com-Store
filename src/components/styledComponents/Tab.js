import styled from 'styled-components';

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color:#dcffeb;
  border-bottom: 4px solid #ccc
`;

export const TabItem = styled.div`
  padding: 10px;
  margin: 10px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? '#fff' : '#999')};
  cursor: pointer;
  background-color:#00BFFF;
  border-radius:10px;
`;

export const TabInput = styled.input`
  margin: 20px;
`;

export const TabButton = styled.button`
  border: none;
  background-color: blue;
  margin:10px;
  font-weight:bold;
  border-radius:20px;
  color: #fff;
  cursor: pointer;
`;
