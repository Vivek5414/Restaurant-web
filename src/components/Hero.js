import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to Delicious Bites</h1>
        <p>Savor the finest flavors, delivered fresh to you</p>
        <a href="#menu" className="cta-btn">Order Now</a>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop" 
          alt="Delicious food"
        />
      </div>
    </section>
  );
};

export default Hero;
