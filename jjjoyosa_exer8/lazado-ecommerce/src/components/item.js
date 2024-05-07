import React from 'react';
import './style.css';

const ItemCard = ({ name, imageSrc, addToCart }) => {
  return (
    <div className="item-card">
      <img src={imageSrc} alt={name} className="item-image" />
      <div className="item-details">
        <h3>{name}</h3>
        <button onClick={() => addToCart(name)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
