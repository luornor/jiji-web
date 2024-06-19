import styled from 'styled-components';

export const CartContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CartTitle = styled.h3`
  margin-top: 0;
`;

export const CartItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 5px 0;
`;

export const RemoveButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;