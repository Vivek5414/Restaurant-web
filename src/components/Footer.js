import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Delicious Bites</h3>
            <p>Serving delicious food with love and care since 2020.</p>
            <div className="social-links">
              <a href="#" title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hours</h4>
            <ul>
              <li>Monday - Friday: 10 AM - 10 PM</li>
              <li>Saturday: 11 AM - 11 PM</li>
              <li>Sunday: 12 PM - 9 PM</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> info@deliciousbites.com</li>
              <li><i className="fas fa-map-marker-alt"></i> 123 Food Street, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Delicious Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
