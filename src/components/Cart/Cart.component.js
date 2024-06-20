import React from 'react';
import { CartContainer, CartItemList, CartItem, RemoveButton,
   CartItemDetails, CartItemName, CartItemQuantity,QuantityInput } from './Cart.styled';

function Cart({ items, onRemove ,onUpdateQuantity }) {
  const handleQuantityChange = (e, item) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };
  return (
    <CartContainer>
      {/* <CartTitle>Shopping Cart</CartTitle> */}
      <CartItemList>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          items.map(item => (
            <CartItem key={item.id}>
              <CartItemDetails>
                <CartItemName>{item.product.name}</CartItemName>
                <CartItemQuantity>
                  Quantity: 
                  <QuantityInput
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item)}
                  />
                </CartItemQuantity>
              </CartItemDetails>
              <RemoveButton onClick={() => onRemove(item.id)}>Remove</RemoveButton>
            </CartItem>
          ))
        )}
      </CartItemList>
    </CartContainer>
  );
}

export default Cart;
