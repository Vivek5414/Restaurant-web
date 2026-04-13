import React, { useState } from 'react';
import './Offers.css';

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const offers = [
    {
      id: 1,
      title: 'Monday Special',
      description: '30% OFF on all Burgers',
      discount: '30%',
      code: 'MONDAY30',
      icon: '🍔',
      color: '#FFE5D9',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
      validUntil: 'Every Monday'
    },
    {
      id: 2,
      title: 'Happy Hour',
      description: 'Buy 1 Get 1 on Pizzas (4-7 PM)',
      discount: 'BUY 1 GET 1',
      code: 'HAPPY1',
      icon: '🍕',
      color: '#FFF0E6',
      gradient: 'linear-gradient(135deg, #ff9500, #ff6b35)',
      validUntil: 'Daily 4-7 PM'
    },
    {
      id: 3,
      title: 'Family Combo',
      description: 'Get a free Dessert with Family Meal',
      discount: 'FREE',
      code: 'FAMILY',
      icon: '🍰',
      color: '#F5E6FF',
      gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
      validUntil: 'All Week'
    },
    {
      id: 4,
      title: 'Loyalty Member',
      description: 'Every 5th order gets 20% discount',
      discount: '20%',
      code: 'LOYALTY',
      icon: '⭐',
      color: '#E6F5FF',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      validUntil: 'Ongoing'
    },
    {
      id: 5,
      title: 'Weekend Feast',
      description: '25% OFF on all Seafood dishes',
      discount: '25%',
      code: 'SEAFOOD25',
      icon: '🐟',
      color: '#E0F2FE',
      gradient: 'linear-gradient(135deg, #0284c7, #0369a1)',
      validUntil: 'Fri-Sun'
    },
    {
      id: 6,
      title: 'Student Special',
      description: '15% OFF with valid student ID',
      discount: '15%',
      code: 'STUDENT15',
      icon: '🎓',
      color: '#FEF3C7',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      validUntil: 'All Week'
    },
    {
      id: 7,
      title: 'First Order',
      description: 'Get ₹100 OFF on your first order',
      discount: '₹100',
      code: 'FIRST100',
      icon: '🎉',
      color: '#ECFDF5',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      validUntil: 'One time'
    },
    {
      id: 8,
      title: 'Bulk Order',
      description: '10% OFF on orders above ₹500',
      discount: '10%',
      code: 'BULK10',
      icon: '📦',
      color: '#FCE7F3',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      validUntil: 'Ongoing'
    },
    {
      id: 9,
      title: 'Late Night',
      description: 'Free delivery on orders after 10 PM',
      discount: 'FREE DELIVERY',
      code: 'NIGHTFREE',
      icon: '🌙',
      color: '#F3E8FF',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      validUntil: '10 PM - 2 AM'
    },
    {
      id: 10,
      title: 'Festival Special',
      description: 'Buy 2 Get 1 FREE on selected items',
      discount: 'BUY 2 GET 1',
      code: 'FESTIVAL',
      icon: '🎊',
      color: '#FFF7ED',
      gradient: 'linear-gradient(135deg, #ea580c, #c2410c)',
      validUntil: 'Festival Season'
    },
    {
      id: 11,
      title: 'Corporate Lunch',
      description: 'Special pricing for office orders',
      discount: 'CORPORATE',
      code: 'CORP50',
      icon: '💼',
      color: '#F0FDF4',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
      validUntil: 'Mon-Fri'
    },
    {
      id: 12,
      title: 'Birthday Special',
      description: 'Free birthday cake with advance booking',
      discount: 'FREE CAKE',
      code: 'BIRTHDAY',
      icon: '🎂',
      color: '#FEF7FF',
      gradient: 'linear-gradient(135deg, #e879f9, #c026d3)',
      validUntil: 'All Year'
    }
  ];

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="offers" id="offers">
      <div className="container">
        <div className="offers-header">
          <h2 className="section-title">Special <span>Offers</span></h2>
          <p className="offers-subtitle">Limited time deals and exclusive discounts</p>
        </div>

        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="offer-card"
              style={{
                animationDelay: `${index * 0.1}s`,
                '--card-gradient': offer.gradient
              }}
            >
              <div className="offer-header">
                <div className="offer-icon" style={{ backgroundColor: offer.color }}>
                  <span className="icon-emoji">{offer.icon}</span>
                </div>
                <div className="offer-discount">
                  <span className="discount-text">{offer.discount}</span>
                  <span className="discount-label">OFF</span>
                </div>
              </div>

              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                <div className="offer-validity">
                  <i className="fas fa-clock"></i>
                  <span>{offer.validUntil}</span>
                </div>
              </div>

              <div className="offer-footer">
                <div className="code-section">
                  <span className="code-label">Code:</span>
                  <button
                    className={`code-btn ${copiedCode === offer.id ? 'copied' : ''}`}
                    onClick={() => handleCopyCode(offer.code, offer.id)}
                  >
                    <span className="code-text">{offer.code}</span>
                    <i className={`fas ${copiedCode === offer.id ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>
                <div className="offer-cta">
                  <span className="cta-text">Use Now</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="offers-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
