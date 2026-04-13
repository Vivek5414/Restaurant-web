import React, { useState } from 'react';
import './MenuItem.css';

const MenuItem = ({ item, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="menu-item">
      <div className="item-image-wrapper">
        {!imageLoaded && (
          <div className="image-placeholder">
            <i className="fas fa-utensils"></i>
          </div>
        )}
        <img
          src={item.image}
          alt={item.name}
          className={`item-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />

        <div className="item-badges">
          {item.isBestseller && (
            <span className="badge bestseller">
              <i className="fas fa-star"></i>
              Bestseller
            </span>
          )}
          <div className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
            <i className={`fas ${item.isVeg ? 'fa-leaf' : 'fa-drumstick-bite'}`}></i>
          </div>
        </div>

        <div className="rating">
          <i className="fas fa-star"></i>
          <span>{item.rating}</span>
        </div>

        <button
          className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          <i className={`fas ${isAdded ? 'fa-check' : 'fa-plus'}`}></i>
          <span>{isAdded ? 'Added' : 'Add'}</span>
        </button>
      </div>

      <div className="item-content">
        <div className="item-header">
          <h3 className="item-name">{item.name}</h3>
          <div className="item-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star ${i < Math.floor(item.rating) ? 'filled' : ''}`}
                ></i>
              ))}
            </div>
            <span className="rating-text">({item.rating})</span>
          </div>
        </div>

        <p className="item-description">{item.description}</p>

        <div className="item-footer">
          <div className="price-section">
            <span className="item-price">${item.price}</span>
            {item.originalPrice && (
              <span className="original-price">${item.originalPrice}</span>
            )}
          </div>
          <div className="delivery-info">
            <i className="fas fa-clock"></i>
            <span>30 min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
