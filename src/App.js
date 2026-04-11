import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Offers from './components/Offers';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
    <div className="App">
      <Header 
        cartCount={cartItems.length} 
        onCartClick={() => setShowCart(!showCart)}
      />
      {showCart && (
        <Cart
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClose={() => setShowCart(false)}
        />
      )}
      <main className="main-content">
        <Hero />
        <Offers />
        <Menu onAddToCart={addToCart} />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
