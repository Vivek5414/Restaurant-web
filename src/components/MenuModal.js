import React from 'react';
import './MenuModal.css';

const MenuModal = ({ isOpen, onClose, onSelectCategory }) => {
  const categories = [
    {
      id: 'all',
      name: 'All Items',
      icon: 'fas fa-utensils',
      description: 'Browse all items from our menu',
      color: '#ff6b6b'
    },
    {
      id: 'burgers',
      name: 'Burgers',
      icon: 'fas fa-hamburger',
      description: 'Juicy burgers and sandwiches',
      color: '#ff8c42'
    },
    {
      id: 'pizza',
      name: 'Pizza',
      icon: 'fas fa-pizza-slice',
      description: 'Authentic pizzas & flatbreads',
      color: '#ffa502'
    },
    {
      id: 'chicken',
      name: 'Chicken',
      icon: 'fas fa-drumstick-bite',
      description: 'Tender chicken dishes',
      color: '#ff9d2e'
    },
    {
      id: 'vegetarian',
      name: 'Vegetarian',
      icon: 'fas fa-leaf',
      description: 'Plant-based delights',
      color: '#22c55e'
    },
    {
      id: 'rice',
      name: 'Rice Dishes',
      icon: 'fas fa-bowl-rice',
      description: 'Fragrant rice specialties',
      color: '#eab308'
    },
    {
      id: 'tacos',
      name: 'Tacos',
      icon: 'fas fa-pepper-hot',
      description: 'Spicy Mexican favorites',
      color: '#ef4444'
    },
    {
      id: 'seafood',
      name: 'Seafood',
      icon: 'fas fa-fish',
      description: 'Fresh from the ocean',
      color: '#06b6d4'
    },
    {
      id: 'pasta',
      name: 'Pasta',
      icon: 'fas fa-wheat-awn',
      description: 'Italian pasta classics',
      color: '#f59e0b'
    },
    {
      id: 'salads',
      name: 'Salads',
      icon: 'fas fa-seedling',
      description: 'Fresh & healthy salads',
      color: '#10b981'
    },
    {
      id: 'bbq',
      name: 'BBQ',
      icon: 'fas fa-fire',
      description: 'Smoky grilled favorites',
      color: '#d97706'
    },
    {
      id: 'dessert',
      name: 'Dessert',
      icon: 'fas fa-ice-cream',
      description: 'Sweet treats & desserts',
      color: '#ec4899'
    },
    {
      id: 'wraps',
      name: 'Wraps',
      icon: 'fas fa-scroll',
      description: 'Handheld wrap collections',
      color: '#8b5cf6'
    },
    {
      id: 'steak',
      name: 'Steak',
      icon: 'fas fa-concierge-bell',
      description: 'Premium grilled steaks',
      color: '#dc2626'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: 'fas fa-wine-glass',
      description: 'Drinks & refreshments',
      color: '#3b82f6'
    }
  ];

  const handleSelectCategory = (categoryId) => {
    onSelectCategory(categoryId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="menu-modal">
        <div className="modal-header">
          <h2>Select a Category</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="modal-content">
          <div className="categories-grid">
            {categories.map(category => (
              <button
                key={category.id}
                className="category-card"
                onClick={() => handleSelectCategory(category.id)}
                style={{ '--card-color': category.color }}
              >
                <div className="category-icon-wrapper">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
