import React, { useState, useEffect } from 'react';
import {ProductDetails,Cart} from '../../components';
import axios from 'axios';
import { ProductDetailsContainer,CartContainer,ProductPageContainer } from './ProductPage.styled';

const baseUrl = process.env.REACT_APP_API_URL;

function ProductPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  
  const fetchCart = () => {
    axios.get(`${baseUrl}/cart`)
      .then(response => {
        setCart(response.data);
        console.log('Cart fetched:', response.data); // Debug log
      })
      .catch(error => console.error('Error fetching cart:', error));
  };

  const handleAddToCart = (productId) => {
    console.log(`Adding product ${productId} to cart`); // Debug log
    axios.post(`${baseUrl}/cart/`, { product: productId, quantity: 1 })
      .then(response => {
        alert('Product added to cart!');
        fetchCart();
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
      });
  };

  const handleRemoveFromCart = (itemId) => {
    console.log(`Removing item ${itemId} from cart`); // Debug log
    axios.delete(`${baseUrl}/cart/${itemId}`)
      .then(response => {
        alert('Item removed from cart!');
        fetchCart();
      })
      .catch(error => {
        console.error('Error removing from cart:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
      });
  };

  const handleUpdateCartQuantity = (itemId, newQuantity) => {
    console.log(`Updating item ${itemId} quantity to ${quantity}`); // Debug log
    axios.put(`${baseUrl}/cart/${itemId}/`, {quantity : newQuantity })
      .then(response => {
        console.log('Cart quantity updated!');
        fetchCart();
      })
      .catch(error => {
        console.error('Error updating cart quantity:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
      });
  };


  return (
    <ProductPageContainer>
      <ProductDetailsContainer>
      <ProductDetails onAddToCart={handleAddToCart} />
      </ProductDetailsContainer>
      <CartContainer>
        <h1>Shopping Cart</h1>
      <Cart items={cart} onRemove={handleRemoveFromCart} onUpdateQuantity={handleUpdateCartQuantity}/>
      </CartContainer>
    </ProductPageContainer>
  );
}

export default ProductPage;
