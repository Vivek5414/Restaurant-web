import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ items, onRemove, onUpdateQuantity, onClose }) => {
  const [step, setStep] = useState('review'); // review or checkout
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipcode: ''
  });

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\n\nName: ${customerInfo.name}\nTotal: $${total.toFixed(2)}\n\nThank you for your order!`);
    setStep('review');
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipcode: ''
    });
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Order</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <i className="fas fa-shopping-cart"></i>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            {step === 'review' ? (
              <>
                <div className="cart-items">
                  {items.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p className="item-price">${item.price}</p>
                      </div>
                      <div className="quantity-control">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                          <i className="fas fa-minus"></i>
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <div className="item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button 
                        className="remove-btn"
                        onClick={() => onRemove(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  className="checkout-btn"
                  onClick={() => setStep('checkout')}
                >
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <>
                <form onSubmit={handleCheckout} className="checkout-form">
                  <h3>Delivery Information</h3>
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={customerInfo.city}
                      onChange={handleInputChange}
                      required
                    />
                    
                    <input
                      type="text"
                      name="zipcode"
                      placeholder="ZIP Code"
                      value={customerInfo.zipcode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="order-total">
                    <h4>Order Total: ${total.toFixed(2)}</h4>
                  </div>

                  <button type="submit" className="place-order-btn">
                    Place Order
                  </button>
                  
                  <button 
                    type="button"
                    className="back-btn"
                    onClick={() => setStep('review')}
                  >
                    Back to Cart
                  </button>
                </form>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
