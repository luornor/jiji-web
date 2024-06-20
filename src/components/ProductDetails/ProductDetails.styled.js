import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f9fa;
`;

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;


export const ProductName = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 16px;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 16px;
`;

export const ProductMeta = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 8px;
`;
