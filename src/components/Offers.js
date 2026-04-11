import React from 'react';
import './Offers.css';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Monday Special',
      description: '30% OFF on all Burgers',
      discount: '30%',
      code: 'MONDAY30',
      icon: '🍔',
      color: '#FFE5D9'
    },
    {
      id: 2,
      title: 'Happy Hour',
      description: 'Buy 1 Get 1 on Pizzas (4-7 PM)',
      discount: 'BUY 1 GET 1',
      code: 'HAPPY1',
      icon: '🍕',
      color: '#FFF0E6'
    },
    {
      id: 3,
      title: 'Family Combo',
      description: 'Get a free Dessert with Family Meal',
      discount: 'FREE',
      code: 'FAMILY',
      icon: '🍰',
      color: '#F5E6FF'
    },
    {
      id: 4,
      title: 'Loyalty Member',
      description: 'Every 5th order gets 20% discount',
      discount: '20%',
      code: 'LOYALTY',
      icon: '⭐',
      color: '#E6F5FF'
    }
  ];

  return (
    <section className="offers" id="offers">
      <div className="container">
        <h2 className="section-title">Special <span>Offers</span></h2>
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card" style={{ borderTopColor: 'var(--primary)' }}>
              <div className="offer-icon" style={{ backgroundColor: offer.color }}>
                {offer.icon}
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <div className="offer-footer">
                <span className="discount-badge">{offer.discount}</span>
                <code className="offer-code">Use: {offer.code}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
