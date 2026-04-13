import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('orders');
  const { signOut } = useAuth();

  useEffect(() => {
    fetchContacts();
    fetchOrders();
  }, []);

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contacts:', error);
    } else {
      setContacts(data);
    }
  };

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
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
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleSignOut} className="sign-out-btn">Sign Out</button>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-tabs">
          <button 
            className={activeTab === 'orders' ? 'active' : ''} 
            onClick={() => setActiveTab('orders')}
          >
            Orders ({orders.length})
          </button>
          <button 
            className={activeTab === 'contacts' ? 'active' : ''} 
            onClick={() => setActiveTab('contacts')}
          >
            Contact Enquiries ({contacts.length})
          </button>
        </div>

        {activeTab === 'orders' && (
          <div className="orders-section">
            <h2>Order Management</h2>
            {orders.length === 0 ? (
              <p>No orders yet.</p>
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
                        {new Date(order.created_at).toLocaleDateString()} {new Date(order.created_at).toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="order-customer">
                      <h4>Customer Details</h4>
                      <p><strong>Name:</strong> {order.customer_name}</p>
                      <p><strong>Email:</strong> {order.customer_email}</p>
                      <p><strong>Phone:</strong> {order.customer_phone}</p>
                      <p><strong>Address:</strong> {order.delivery_address}, {order.delivery_city}, {order.delivery_zipcode}</p>
                    </div>
                    <div className="order-items">
                      <h4>Order Items</h4>
                      {order.order_items.map((item, index) => (
                        <div key={index} className="order-item">
                          <span>{item.name} x{item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
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
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="contacts-section">
            <h2>Contact Enquiries</h2>
            {contacts.length === 0 ? (
              <p>No contact enquiries yet.</p>
            ) : (
              <div className="contacts-list">
                {contacts.map((contact) => (
                  <div key={contact.id} className="contact-card">
                    <div className="contact-header">
                      <h3>{contact.subject}</h3>
                      <span className="contact-date">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="contact-details">
                      <p><strong>Name:</strong> {contact.name}</p>
                      <p><strong>Email:</strong> {contact.email}</p>
                      <p><strong>Message:</strong></p>
                      <p className="contact-message">{contact.about}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;