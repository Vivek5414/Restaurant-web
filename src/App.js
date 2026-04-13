import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Offers from './components/Offers';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import CustomerDashboard from './components/CustomerDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function AppContent() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const { user, signOut, isAdmin } = useAuth();

  const addToCart = (item) => {
    const existingItem = cartItems.find(i => i.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      ));
    }
  };

  return (
    <Router>
      <div className="App">
        <Header 
          cartCount={cartItems.length} 
          onCartClick={() => setShowCart(!showCart)}
          user={user}
          onSignOut={signOut}
          isAdmin={isAdmin}
        />
        {showCart && (
          <Cart
            items={cartItems}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClose={() => setShowCart(false)}
            user={user}
          />
        )}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <CustomerDashboard />
            </ProtectedRoute>
          } />
          <Route path="/" element={
            <main className="main-content">
              <div id="home">
                <Hero />
              </div>
              <div id="offers">
                <Offers />
              </div>
              <div id="menu">
                <Menu onAddToCart={addToCart} />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
