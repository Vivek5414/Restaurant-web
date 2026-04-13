import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Cart.css';

const Cart = ({ items, onRemove, onUpdateQuantity, onClose, user }) => {
  const [step, setStep] = useState('review'); // review or checkout
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipcode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!supabase) {
      alert('Database not configured. Please check your Supabase setup.');
      setIsSubmitting(false);
      return;
    }

    try {
      const orderData = {
        user_id: user.id,
        customer_name: customerInfo.name,
        customer_email: customerInfo.email,
        customer_phone: customerInfo.phone,
        delivery_address: customerInfo.address,
        delivery_city: customerInfo.city,
        delivery_zipcode: customerInfo.zipcode,
        order_items: items,
        subtotal: subtotal,
        tax: tax,
        total: total,
        status: 'pending'
      };

      const { error } = await supabase
        .from('orders')
        .insert([orderData]);

      if (error) {
        console.error('Error saving order:', error);
        alert('There was an error placing your order. Please try again.');
      } else {
        alert(`Order placed successfully!\n\nOrder ID: ${Date.now()}\nName: ${customerInfo.name}\nTotal: $${total.toFixed(2)}\n\nThank you for your order!`);
        setStep('review');
        setCustomerInfo({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          zipcode: ''
        });
        // Clear cart items
        items.forEach(item => onRemove(item.id));
        onClose();
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your order. Please try again.');
    }

    setIsSubmitting(false);
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

                {!user && (
                  <div className="login-prompt">
                    <p>Please <Link to="/login" onClick={onClose}>login</Link> to place an order</p>
                  </div>
                )}

                <button 
                  className="checkout-btn"
                  onClick={() => {
                    if (!user) {
                      alert('Please login to place an order');
                      onClose();
                      // Could redirect to login, but for now just alert
                    } else {
                      setStep('checkout');
                    }
                  }}
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

                  <button type="submit" className="place-order-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Placing Order...' : 'Place Order'}
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
