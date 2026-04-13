import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount, onCartClick, user, onSignOut, isAdmin }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await onSignOut();
    navigate('/');
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-utensils"></i>
            <span>Delicious Bites</span>
          </div>
          
          <nav className="nav">
            <button onClick={() => handleNavClick('home')} className="nav-link">Home</button>
            <button onClick={() => handleNavClick('menu')} className="nav-link">Menu</button>
            <button onClick={() => handleNavClick('offers')} className="nav-link">Offers</button>
            <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
          </nav>

          <div className="header-actions">
            {user ? (
              <div className="user-menu">
                <span>Welcome, {user.email}</span>
                {isAdmin ? (
                  <Link to="/admin" className="dashboard-link">Admin Dashboard</Link>
                ) : (
                  <Link to="/dashboard" className="dashboard-link">My Orders</Link>
                )}
                <button onClick={handleSignOut} className="sign-out-btn">Sign Out</button>
              </div>
            ) : (
              <Link to="/login" className="login-btn">Login</Link>
            )}

            <button className="cart-btn" onClick={onCartClick}>
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
