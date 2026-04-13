import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import './CustomerDashboard.css';

const CustomerDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, signOut } = useAuth();

  useEffect(() => {
    fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching orders:', error);
    } else {
      setOrders(data);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="customer-dashboard">
      <header className="dashboard-header">
        <h1>My Orders</h1>
        <button onClick={handleSignOut} className="sign-out-btn">Sign Out</button>
      </header>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome back, {user?.email}!</h2>
          <p>Here are your recent orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="no-orders">
            <i className="fas fa-shopping-cart"></i>
            <h3>No orders yet</h3>
            <p>You haven't placed any orders yet. Start browsing our menu!</p>
            <a href="/" className="browse-menu-btn">Browse Menu</a>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <h3>Order #{order.id}</h3>
                  <span className={`order-status ${order.status}`}>
                    {order.status}
                  </span>
                  <span className="order-date">
                    {new Date(order.created_at).toLocaleDateString()} at {new Date(order.created_at).toLocaleTimeString()}
                  </span>
                </div>

                <div className="order-items">
                  <h4>Order Items</h4>
                  {order.order_items.map((item, index) => (
                    <div key={index} className="order-item">
                      <div className="item-info">
                        <span className="item-name">{item.name}</span>
                        <span className="item-quantity">x{item.quantity}</span>
                      </div>
                      <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="order-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${order.subtotal}</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax:</span>
                    <span>${order.tax}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total:</span>
                    <span>${order.total}</span>
                  </div>
                </div>

                <div className="delivery-info">
                  <h4>Delivery Address</h4>
                  <p>{order.delivery_address}</p>
                  <p>{order.delivery_city}, {order.delivery_zipcode}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;