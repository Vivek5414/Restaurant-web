import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="menu-item">
      <div className="item-image-wrapper">
        <img src={item.image} alt={item.name} className="item-image" />
        <div className="rating">
          <i className="fas fa-star"></i>
          <span>{item.rating}</span>
        </div>
      </div>
      
      <div className="item-content">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        
        <div className="item-footer">
          <span className="item-price">${item.price}</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(item)}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
