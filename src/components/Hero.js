import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleOrderNow = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = (cardId) => {
    setImageErrors(prev => ({ ...prev, [cardId]: true }));
  };

  const foodCards = [
    {
      id: 1,
      name: 'Classic Burger',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=350&h=280&fit=crop&crop=center&q=80',
      alt: 'Juicy cheeseburger with fresh ingredients'
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      price: '$15.99',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=350&h=280&fit=crop&crop=center&q=80',
      alt: 'Authentic Italian margherita pizza'
    },
    {
      id: 3,
      name: 'Chicken Biryani',
      price: '$14.99',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=350&h=280&fit=crop&crop=center&q=80',
      alt: 'Aromatic chicken biryani with spices'
    },
    {
      id: 4,
      name: 'Paneer Tikka',
      price: '$11.99',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=350&h=280&fit=crop&crop=center&q=80',
      alt: 'Grilled paneer tikka with spices'
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=350&h=280&fit=crop&crop=center&q=80',
      alt: 'Rich chocolate lava cake'
    }
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-highlight">Delicious</span> Bites
          </h1>
          <p className="hero-subtitle">
            Order from your favorite restaurants and get food delivered in minutes
          </p>
          <div className="hero-features">
            <div className="feature">
              <i className="fas fa-clock"></i>
              <span>30 min delivery</span>
            </div>
            <div className="feature">
              <i className="fas fa-star"></i>
              <span>4.5 rating</span>
            </div>
            <div className="feature">
              <i className="fas fa-shield-alt"></i>
              <span>100% safe</span>
            </div>
          </div>
        </div>
        <div className="hero-actions">
          <button className="cta-btn primary" onClick={handleOrderNow}>
            <i className="fas fa-shopping-bag"></i>
            Order Now
          </button>
          <button className="cta-btn secondary" onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}>
            <i className="fas fa-gift"></i>
            View Offers
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="food-cards">
          {foodCards.map((card, index) => (
            <div
              key={card.id}
              className={`food-card card-${index + 1}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {!imageErrors[card.id] ? (
                <img
                  src={card.image}
                  alt={card.alt}
                  onError={() => handleImageError(card.id)}
                  loading="lazy"
                />
              ) : (
                <div className="image-placeholder">
                  <i className="fas fa-utensils"></i>
                </div>
              )}
              <div className="card-info">
                <h4>{card.name}</h4>
                <span className="price">{card.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
