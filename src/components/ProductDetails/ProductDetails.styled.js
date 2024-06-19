import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-start;
flex-direction: column;
min-height: 100vh;
`;

export const ProductInfo = styled.div`
flex: 1;
padding: 20px;
`;

export const StyledProductDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-height: 100vh;
  flex-direction: column;
  padding: 20px;
  background-color: #f0f0f0;
  shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ProductImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;
