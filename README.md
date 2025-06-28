# ShopNest - A E-commerce React Application

A modern, responsive e-commerce web application built with React, featuring product browsing, category filtering, shopping cart functionality, and detailed product pages.

## Screenshots

### Landing Page
![Homepage](screenshots/preview.png)

## 🚀 Features

- **Product Catalog**: Browse through various product categories
- **Category Filtering**: Filter products by categories (Furniture, Electronics, Lamps, Kitchen, Chairs, Skin Care)
- **Shopping Cart**: Add items to cart with quantity selection
- **Product Details**: Detailed product pages with image gallery and specifications
- **Persistent Cart**: Cart data persists using localStorage
- **Responsive Design**: Mobile-friendly interface
- **Product Search**: Browse all products or filter by specific categories
- **Interactive UI**: Smooth animations and user feedback

## 🛠️ Tech Stack

- **React** (with Hooks)
- **React Router DOM** - Client-side routing
- **Context API** - State management for cart functionality
- **CSS3** - Styling and animations
- **LocalStorage** - Data persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## 🛒 Cart Functionality

The application includes a fully functional shopping cart system:

- **Add to Cart**: Products can be added with specified quantities
- **Quantity Management**: Increase/decrease item quantities
- **Duplicate Handling**: Adding existing items updates quantities
- **Persistence**: Cart data is saved to localStorage
- **Context Integration**: Cart state managed through React Context


## 📱 Components Overview

### Core Components

- **App.js**: Main application component with routing and cart context
- **Navbar**: Navigation bar with cart integration
- **Home**: Landing page with featured sections
- **Categories**: Category browsing with nested routes
- **ProductPage**: Detailed product view with cart functionality

### Product Categories

Each category component filters and displays products from the main data source:
- All products view
- Category-specific filtering
- Consistent layout and styling

## 📊 Data Management

- Product data stored in `AllData.js`
- Cart state managed via React Context
- LocalStorage integration for data persistence
- Dynamic product filtering by category


## 🚀 Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Running the Project
1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Build for production: `npm run build`


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using React