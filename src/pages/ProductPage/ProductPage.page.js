import React, { useState, useEffect } from 'react';
import {ProductDetails,Cart} from '../../components';
import axios from 'axios';


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
    axios.post(`${baseUrl}/cart/`, { product_id: productId, quantity: 1 })
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

  return (
    <div>
      <ProductDetails onAddToCart={handleAddToCart} />
      <Cart items={cart} />
    </div>
  );
}

export default ProductPage;
