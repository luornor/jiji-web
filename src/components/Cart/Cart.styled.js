import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 350px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-left: 20px;
`;

export const CartTitle = styled.h3`
  margin: 0 0 20px 0;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
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
  padding: 10px 0;
`;

export const CartItemDetails = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

export const CartItemName = styled.span`
  display: block;
  font-size: 1.1rem;
  color: #555;
`;

export const CartItemQuantity = styled.span`
  font-size: 0.9rem;
  color: #777;
`;

export const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

export const QuantityInput = styled.input`
  width: 100px;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
`;