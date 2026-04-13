import React, { useState, useEffect } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import MenuModal from './MenuModal';

const Menu = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: 'Classic Cheeseburger',
      category: 'burgers',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Juicy beef patty with melted cheddar cheese, lettuce, tomato & special sauce',
      rating: 4.8,
      isVeg: false,
      isBestseller: true
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      category: 'pizza',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Fresh mozzarella, tomato sauce, basil leaves on thin crust',
      rating: 4.9,
      isVeg: true,
      isBestseller: true
    },
    {
      id: 3,
      name: 'Crispy Fried Chicken',
      category: 'chicken',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1626082867052-37001ba4e5b1?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Perfectly seasoned and fried to golden brown with herbs',
      rating: 4.7,
      isVeg: false,
      isBestseller: false
    },
    {
      id: 4,
      name: 'Paneer Butter Masala',
      category: 'vegetarian',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Creamy tomato curry with soft paneer cubes and aromatic spices',
      rating: 4.8,
      isVeg: true,
      isBestseller: true
    },
    {
      id: 5,
      name: 'Chicken Biryani',
      category: 'rice',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Fragrant basmati rice with tender chicken, saffron & boiled eggs',
      rating: 4.9,
      isVeg: false,
      isBestseller: true
    },
    {
      id: 6,
      name: 'Spicy Tacos',
      category: 'tacos',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Three tacos with spicy beef, jalapeños, salsa & cheese',
      rating: 4.8,
      isVeg: false,
      isBestseller: false
    },
    {
      id: 7,
      name: 'Grilled Salmon',
      category: 'seafood',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1580959375944-abd7e991a971?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Fresh salmon fillet with lemon butter sauce and herbs',
      rating: 4.9,
      isVeg: false,
      isBestseller: true
    },
    {
      id: 8,
      name: 'Creamy Pasta Carbonara',
      category: 'pasta',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Authentic Italian pasta with bacon, cream & parmesan',
      rating: 4.8,
      isVeg: false,
      isBestseller: false
    },
    {
      id: 9,
      name: 'Chocolate Lava Cake',
      category: 'dessert',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Warm chocolate cake with molten center & vanilla ice cream',
      rating: 4.9,
      isVeg: true,
      isBestseller: true
    },
    {
      id: 10,
      name: 'Veggie Supreme Pizza',
      category: 'pizza',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Loaded with bell peppers, onions, mushrooms, olives & cheese',
      rating: 4.7,
      isVeg: true,
      isBestseller: false
    },
    {
      id: 11,
      name: 'Butter Chicken',
      category: 'chicken',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae391??w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Rich creamy curry with tender chicken pieces & butter',
      rating: 4.9,
      isVeg: false,
      isBestseller: true
    },
    {
      id: 12,
      name: 'Caesar Salad',
      category: 'salads',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1??w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Crisp romaine lettuce with caesar dressing, croutons & parmesan',
      rating: 4.6,
      isVeg: true,
      isBestseller: false
    },
    {
      id: 13,
      name: 'Fish & Chips',
      category: 'seafood',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1579208570378-8c970854bc23??w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Beer battered cod with crispy fries & tartar sauce',
      rating: 4.8,
      isVeg: false,
      isBestseller: false
    },
    {
      id: 14,
      name: 'Mushroom Risotto',
      category: 'rice',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371??w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Creamy arborio rice with wild mushrooms & parmesan',
      rating: 4.7,
      isVeg: true,
      isBestseller: false
    },
    {
      id: 15,
      name: 'BBQ Ribs',
      category: 'bbq',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d??w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Slow cooked pork ribs with BBQ sauce & coleslaw',
      rating: 4.8,
      isVeg: false,
      isBestseller: true
    },
    {
      id: 16,
      name: 'Tiramisu',
      category: 'dessert',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9??w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers',
      rating: 4.8,
      isVeg: true,
      isBestseller: false
    },
    {
      id: 17,
      name: 'Chicken Shawarma Wrap',
      category: 'wraps',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1551782450-17144efb5723??w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Marinated chicken with garlic sauce in pita bread',
      rating: 4.7,
      isVeg: false,
      isBestseller: false
    },
    {
      id: 18,
      name: 'Vegetable Fried Rice',
      category: 'rice',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b??w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Wok tossed rice with mixed vegetables & soy sauce',
      rating: 4.6,
      isVeg: true,
      isBestseller: false
    },
    {
      id: 19,
      name: 'Beef Steak',
      category: 'steak',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d??w=400&h=350&fit=crop&crop=center&q=85',
      description: 'Grilled ribeye steak with garlic butter & mashed potatoes',
      rating: 4.9,
      isVeg: false,
      isBestseller: true
    },
    {
      id: 20,
      name: 'Fruit Salad',
      category: 'salads',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c??w=400&h=350&fit=crop&crop=center&q=85&q=85',
      description: 'Fresh seasonal fruits with honey yogurt dressing',
      rating: 4.5,
      isVeg: true,
      isBestseller: false
    },
    {
      id: 21,
      name: 'Fresh Orange Juice',
      category: 'beverages',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba??w=400&h=350&fit=crop&crop=center&q=85&q=85',
      description: '100% fresh squeezed orange juice',
      rating: 4.8,
      isVeg: true,
      isBestseller: false
    },
    {
      id: 22,
      name: 'Iced Coffee',
      category: 'beverages',
      price: 4.49,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e??w=400&h=350&fit=crop&crop=center&q=85&q=85',
      description: 'Cold brew coffee with ice and milk',
      rating: 4.7,
      isVeg: true,
      isBestseller: true
    },
    {
      id: 23,
      name: 'Smoothie Bowl',
      category: 'beverages',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1590080876614-cd72d4a9b2b4??w=400&h=350&fit=crop&crop=center&q=85&q=85',
      description: 'Thick smoothie with granola, coconut & berries',
      rating: 4.9,
      isVeg: true,
      isBestseller: true
    },
    {
      id: 24,
      name: 'Mojito',
      category: 'beverages',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1608270861620-7476fef0deed??w=400&h=350&fit=crop&crop=center&q=85&q=85',
      description: 'Refreshing mint, lime & soda drink',
      rating: 4.8,
      isVeg: true,
      isBestseller: false
    },
    {
      id: 25,
      name: 'Piña Colada',
      category: 'beverages',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1556742208570-2eb002edd72c??w=400&h=350&fit=crop&crop=center&q=85&q=85',
      description: 'Creamy coconut & pineapple tropical drink',
      rating: 4.8,
      isVeg: true,
      isBestseller: false
    },
    {
      id: 26,
      name: 'Mango Lassi',
      category: 'beverages',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab9a5a6??w=400&h=350&fit=crop&crop=center&q=85&q=85',
      description: 'Sweet yogurt drink with fresh mango',
      rating: 4.9,
      isVeg: true,
      isBestseller: true
    },
    {
      id: 27,
      name: 'Iced Tea',
      category: 'beverages',
      price: 3.49,
      image: 'https://images.unsplash.com/photo-1599857112846-8f0d2a8e9b63??w=400&h=350&fit=crop&crop=center&q=85&q=85',
      description: 'Cold brewed tea with lemon & mint',
      rating: 4.6,
      isVeg: true,
      isBestseller: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: 'fas fa-utensils' },
    { id: 'burgers', name: 'Burgers', icon: 'fas fa-hamburger' },
    { id: 'pizza', name: 'Pizza', icon: 'fas fa-pizza-slice' },
    { id: 'chicken', name: 'Chicken', icon: 'fas fa-drumstick-bite' },
    { id: 'vegetarian', name: 'Vegetarian', icon: 'fas fa-leaf' },
    { id: 'rice', name: 'Rice Dishes', icon: 'fas fa-utensils' },
    { id: 'tacos', name: 'Tacos', icon: 'fas fa-pepper-hot' },
    { id: 'seafood', name: 'Seafood', icon: 'fas fa-fish' },
    { id: 'pasta', name: 'Pasta', icon: 'fas fa-wheat-awn' },
    { id: 'salads', name: 'Salads', icon: 'fas fa-seedling' },
    { id: 'bbq', name: 'BBQ', icon: 'fas fa-fire' },
    { id: 'dessert', name: 'Dessert', icon: 'fas fa-ice-cream' },
    { id: 'wraps', name: 'Wraps', icon: 'fas fa-scroll' },
    { id: 'steak', name: 'Steak', icon: 'fas fa-concierge-bell' },
    { id: 'beverages', name: 'Beverages', icon: 'fas fa-wine-glass' }
  ];

  useEffect(() => {
    let items = activeCategory === 'all'
      ? menuItems
      : menuItems.filter(item => item.category === activeCategory);

    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(items);
  }, [activeCategory, searchTerm, menuItems]);

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="menu-header">
          <h2 className="section-title">Our <span>Menu</span></h2>
          <p className="menu-subtitle">Discover our delicious collection of handcrafted meals</p>
        </div>

        <div className="menu-controls">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="menu-popup-btn"
            onClick={() => setIsModalOpen(true)}
            title="Browse categories"
          >
            <i className="fas fa-th"></i>
            <span>Browse Menu</span>
          </button>
        </div>

        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <i className={cat.icon}></i>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="menu-stats">
          <div className="stat">
            <span className="stat-number">{filteredItems.length}</span>
            <span className="stat-label">Items</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {filteredItems.filter(item => item.isBestseller).length}
            </span>
            <span className="stat-label">Bestsellers</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {filteredItems.filter(item => item.isVeg).length}
            </span>
            <span className="stat-label">Veg</span>
          </div>
        </div>

        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="menu-item-wrapper"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MenuItem
                item={item}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No items found</h3>
            <p>Try adjusting your search or category filter</p>
          </div>
        )}

        <MenuModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelectCategory={handleSelectCategory}
        />
      </div>
    </section>
  );
};

export default Menu;
