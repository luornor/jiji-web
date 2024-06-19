import React from 'react';
import { CartContainer, CartTitle, CartItemList, CartItem, RemoveButton } from './Cart.styled';


function Cart({ items }) {
  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      <CartItemList>
        {items.map(item => (
          <CartItem key={item.id}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <RemoveButton>Remove</RemoveButton>
          </CartItem>
        ))}
      </CartItemList>
    </CartContainer>
  );
}

export default Cart;
