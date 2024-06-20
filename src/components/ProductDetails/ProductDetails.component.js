import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  StyledProductDetails,
  ProductImage,
  AddToCartButton,
  ProductDetailsContainer,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductMeta,
} from "./ProductDetails.styled";

const baseUrl = process.env.REACT_APP_API_URL;

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/products/${id}/`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching product details: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCartClick = () => {
    onAddToCart(product.id);
  };

  return (
    <ProductDetailsContainer>
      <StyledProductDetails>
        <ProductName>{product.name}</ProductName>
        <ProductImage src={product.image_url} alt={product.name} />
        <ProductPrice>Price: GHC {product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductMeta>Category: {product.category.name}</ProductMeta>
        <ProductMeta>Region: {product.region.name}</ProductMeta>
        <AddToCartButton onClick={handleAddToCartClick}>
          Add to Cart
        </AddToCartButton>
      </StyledProductDetails>
    </ProductDetailsContainer>
  );
}

export default ProductDetails;
