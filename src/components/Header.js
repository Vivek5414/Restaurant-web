import React from 'react';
import './Header.css';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-utensils"></i>
            <span>Delicious Bites</span>
          </div>
          
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#offers">Offers</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="cart-btn" onClick={onCartClick}>
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
