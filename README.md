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
- **User authentication required for checkout**

💳 **Checkout Process**
- Customer information form
- Delivery address input
- Order summary
- Confirmation message
- **Requires user login**

🔐 **User Authentication**
- User registration and login
- Secure authentication with Supabase
- Protected ordering system
- Unique user accounts

👨‍💼 **Admin Dashboard**
- Separate admin login
- View all contact enquiries
- **View all customer orders with complete details**
- **Customer contact information and delivery addresses**
- Manage customer communications
- Admin-only access

👤 **Customer Dashboard**
- **Personal order history**
- **View order details and status**
- **Order tracking with timestamps**
- **Delivery address information**
- **Order items and pricing breakdown**

🎉 **Special Offers**
- 4 promotional offers displayed
- Unique discount codes
- Different discount types (percentage, BOGO, free items)
- Prominent discount display

## Technologies Used

- **React 18.2.0** - Frontend framework
- **React Router DOM** - Client-side routing
- **Supabase** - Backend as a Service (Authentication & Database)
- **CSS3** - Styling with CSS variables and gradients
- **Font Awesome** - Icons
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

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Settings > API to get your project URL and anon key
   - Copy `.env.example` to `.env` and replace with your values:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up database tables**
   - In Supabase dashboard, go to SQL Editor
   - Run the following SQL to create the tables:
   ```sql
   -- Contacts table
   CREATE TABLE contacts (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     subject TEXT NOT NULL,
     about TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Orders table
   CREATE TABLE orders (
     id SERIAL PRIMARY KEY,
     user_id UUID NOT NULL,
     customer_name TEXT NOT NULL,
     customer_email TEXT NOT NULL,
     customer_phone TEXT NOT NULL,
     delivery_address TEXT NOT NULL,
     delivery_city TEXT NOT NULL,
     delivery_zipcode TEXT NOT NULL,
     order_items JSONB NOT NULL,
     subtotal DECIMAL(10,2) NOT NULL,
     tax DECIMAL(10,2) NOT NULL,
     total DECIMAL(10,2) NOT NULL,
     status TEXT DEFAULT 'pending',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```
   - Enable Row Level Security (RLS) on both tables in the Table Editor
   - Create policies to allow inserts for anonymous users (contacts) and authenticated users (orders)

5. **Start the development server**
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
│   ├── Contact.js & Contact.css
│   ├── Footer.js & Footer.css
│   ├── Login.js & Login.css
│   ├── AdminDashboard.js & AdminDashboard.css
│   ├── CustomerDashboard.js & CustomerDashboard.css
│   └── ProtectedRoute.js
├── contexts/
│   └── AuthContext.js
├── App.js & App.css
├── index.js & index.css
├── supabaseClient.js
public/
├── index.html
package.json
.env (create this file)
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

### For Customers:
1. **Register/Login**: Click the "Login" button in the header to create an account or sign in
2. **Browse Menu**: Use category buttons to filter items
3. **Add Items**: Click the "+" button on any item to add to cart
4. **Checkout**: Click "Proceed to Checkout" in the cart (requires login)
5. **Enter Details**: Fill in delivery information
6. **Place Order**: Complete the order
7. **View Orders**: Access "My Orders" from the header to view order history

### For Admins:
1. **Register as Admin**: Sign up with role "Admin"
2. **Login**: Use your admin credentials
3. **Access Dashboard**: Navigate to `/admin` or use admin login
4. **View Orders**: See all customer orders with complete details
5. **View Enquiries**: See all contact form submissions
6. **Manage Communications**: Review customer messages and contact details

## Admin Access

To create an admin account:
1. Go to the login page
2. Click "Sign Up"
3. Select "Admin" as the role
4. Complete registration
5. Login with admin credentials
6. Access the admin dashboard at `/admin`

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
