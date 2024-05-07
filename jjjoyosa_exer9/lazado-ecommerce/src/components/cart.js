import React from 'react';
import './style.css';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
