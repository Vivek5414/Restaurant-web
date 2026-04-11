import React, { useState } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    {
      id: 1,
      name: 'Classic Cheeseburger',
      category: 'burgers',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      description: 'Juicy beef patty with melted cheddar cheese',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      category: 'pizza',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
      description: 'Fresh mozzarella, tomato, and basil',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Crispy Fried Chicken',
      category: 'chicken',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1626082867052-37001ba4e5b1?w=400&h=300&fit=crop',
      description: 'Perfectly seasoned and fried to golden brown',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Vegetable Stir Fry',
      category: 'vegetarian',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=300&fit=crop',
      description: 'Fresh mixed vegetables with Asian sauce',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Spicy Tacos',
      category: 'tacos',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
      description: 'Three tacos with spicy beef and jalapeños',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Grilled Salmon',
      category: 'seafood',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1580959375944-abd7e991a971?w=400&h=300&fit=crop',
      description: 'Fresh salmon fillet with lemon butter',
      rating: 4.9
    },
    {
      id: 7,
      name: 'Creamy Pasta Carbonara',
      category: 'pasta',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
      description: 'Authentic Italian pasta with bacon and cream',
      rating: 4.8
    },
    {
      id: 8,
      name: 'Chocolate Lava Cake',
      category: 'dessert',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      description: 'Warm chocolate cake with molten center',
      rating: 4.9
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'tacos', name: 'Tacos' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'dessert', name: 'Dessert' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2 className="section-title">Our <span>Menu</span></h2>
        
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <MenuItem 
              key={item.id} 
              item={item}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
