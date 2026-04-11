# Delicious Bites - Restaurant Website

A modern, responsive React-based restaurant website featuring an online ordering system and offline discount offers.

## Features

✨ **Modern Design**
- Light color scheme with gradient accents
- Fully responsive (works on desktop, tablet, and mobile)
- Smooth animations and transitions
- Professional UI/UX design

🍔 **Menu System**
- 8 different food items with images
- Categorized menu (Burgers, Pizza, Chicken, Vegetarian, Tacos, Seafood, Pasta, Dessert)
- High-quality food images from Unsplash
- Star ratings for each item
- Real-time category filtering

🛒 **Online Ordering System**
- Add items to cart
- Adjust quantities
- Remove items
- Real-time cart total calculation
- Tax calculation (8%)
- Sliding cart sidebar

💳 **Checkout Process**
- Customer information form
- Delivery address input
- Order summary
- Confirmation message

🎉 **Special Offers**
- 4 promotional offers displayed
- Unique discount codes
- Different discount types (percentage, BOGO, free items)
- Prominent discount display

## Technologies Used

- **React 18.2.0** - Frontend framework
- **CSS3** - Styling with CSS variables and gradients
- **Font Awesome** - Icons
- **Unsplash API** - Food images
- **React Icons** - Additional icons

## Installation

1. **Clone or download the project**
```bash
cd "Restaurant web"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── Menu.js & Menu.css
│   ├── MenuItem.js & MenuItem.css
│   ├── Offers.js & Offers.css
│   ├── Cart.js & Cart.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
public/
├── index.html
package.json
```

## Color Palette

- **Primary Color**: #FF6B35 (Orange)
- **Secondary Color**: #FFA62B (Amber)
- **Background**: #F5F7FA (Light Blue)
- **Light Background**: #FFFFFF (White)
- **Text Dark**: #2C3E50 (Dark Blue)
- **Text Light**: #7B8C99 (Gray)

## Features Breakdown

### Header
- Logo and navigation menu
- Shopping cart with item count badge
- Sticky positioning for easy access

### Hero Section
- Eye-catching welcome message
- Call-to-action button
- Featured food image

### Menu Section
- Category filter buttons
- 8-item menu grid
- Each item shows name, description, price, and rating
- Quick add-to-cart functionality

### Offers Section
- 4 promotional offers
- Discount codes for offline redemption
- Visually appealing offer cards

### Cart System
- Sliding side panel
- Item management (add/remove/modify quantity)
- Real-time calculation
- Two-step checkout process

### Footer
- Company information
- Quick links
- Operating hours
- Contact information
- Social media links

## How to Use

1. **Browse Menu**: Use category buttons to filter items
2. **Add Items**: Click the "+" button on any item to add to cart
3. **View Cart**: Click the shopping cart icon in the header
4. **Checkout**: Click "Proceed to Checkout" in the cart
5. **Enter Details**: Fill in delivery information
6. **Place Order**: Complete the order

## Responsive Design

The website is fully responsive and works perfectly on:
- Desktop (1200px and above)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## Future Enhancements

- Payment gateway integration
- Real order tracking
- User authentication
- Order history
- Review system
- Advanced filtering options
- Admin dashboard

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## License

© 2024 Delicious Bites. All rights reserved.

## Contact

- Phone: +1 (555) 123-4567
- Email: info@deliciousbites.com
- Address: 123 Food Street, NY 10001
