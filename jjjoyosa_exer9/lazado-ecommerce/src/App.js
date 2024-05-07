import React, { useState } from 'react';
import Header from './components/header';
import ItemCard from './components/item';
import ShoppingCart from './components/cart';

const categories = [
  { name: "Appliances", id: 1 },
  { name: "Groceries", id: 2 },
  { name: "Gadgets", id: 3 },
  { name: "Clothing", id: 4 },
];

const itemsByCategory = {
  "Appliances": [
    { name: "Washing Machine", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSix1t9q0Yf4kLrUK4PBDUtZwVoHqamihew20RMsU9LMw&s", id: 1 },
    { name: "Refrigerator", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFhPcundoeTdaqzrTZPcZmoVL5sOY5a2MnwbumGkMSw&s", id: 2 },
    { name: "TV", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-faMfDiSwWIukdd03mMVVOid6ia8pLr1rak-hIM5cw&s", id: 3 },
    { name: "Electric Fan", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuwZ5VkSl17Ji56sJI4hHeGE5nniOpQiAzZT1_L57GQ&s", id: 4 },
  ],
  "Groceries": [
    { name: "Rice", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKdCxQaD77YWUcgPkOuGttcQ1adzkCD-5aVBMoYwViCA&s", id: 5 },
    { name: "Vegetables", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaz7zpJVh15Gkxu_uY_cHDrXaisstwkh3LOHO0ARHncA&s", id: 6 },
    { name: "Fruits", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxI-BC6WmA_ZIb3bOR266WXO-69rqceR640p_KMkiyw&s", id: 7 },
    { name: "Condiments", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLcTGyFe5lHed9HK2XSAc6mCeGR9L1OgSYb_6y7qJxg&s", id: 8 },
  ],
  "Gadgets": [
    { name: "Smartphone", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyM94vbXLkcwaD-HvJztT-HC9YcFGt7NEEO9xgKH_b1Q&s", id: 9 },
    { name: "Laptop", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNubAQGLTJBLWwl-z3WnpcLiXLa7JKYlztwTyo7TL7A&s", id: 10 },
    { name: "PlayStation 5", imageSrc: "https://www.jbhifi.co.nz/cdn/shop/files/432764-Product-0-I-638361354007769367.jpg?v=1714519090", id: 11 },
    { name: "Digital Camera", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBM_JKB17G9CXrN_mVJ3U6auhTwCykC1GiDsEjpe8AnQ&s", id: 12 },
  ],
  "Clothing": [
    { name: "T-shirt", imageSrc: "https://img.lazcdn.com/g/p/2eebec221b59d4661ffd11b378ee1f12.png_720x720q80.png", id: 13 },
    { name: "Jeans", imageSrc: "https://marksandspencer.com.ph/cdn/shop/products/SD_01_T57_7272_HD_X_EC_90.jpg?v=1679039562", id: 14 },
    { name: "Socks", imageSrc: "https://marksandspencer.com.ph/cdn/shop/products/HT_04_T64_8021A_Y0_X_EC_0.jpg?v=1583889160", id: 15 },
    { name: "Hoodies", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRge0ygkLcxB5UIt7rE3kEEC4FkzsUptriDt4nwMzRPsfhdK5yjtdy4Slx1NPO2OrlZQjc&usqp=CAU", id: 16 },
  ],
};

function App() {
  const [activeCategory, setActiveCategory] = useState("Appliances");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemName, itemId) => {
    const item = { name: itemName, id: itemId };
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Header name="Lazado" categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
      <div className="main-container">
        <div className="item-container">
          {itemsByCategory[activeCategory].map(item => (
            <ItemCard 
              key={item.id} 
              name={item.name} 
              imageSrc={item.imageSrc} 
              addToCart={() => addToCart(item.name, item.id)} 
            />
          ))}
        </div>
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;