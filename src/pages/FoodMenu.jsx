// src/pages/FoodMenu.jsx
import React, { useState } from 'react';

const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuCategories = {
    breakfast: {
      name: 'Breakfast',
      items: [
        { name: 'Puri-Sabji', price: '₹80', description: '2 puris with aloo sabji' },
        { name: 'Chole Bhature', price: '₹100', description: '2 bhature with spicy chole' },
        { name: 'Idli-Sambar', price: '₹70', description: '4 idlis with sambar & chutney' },
        { name: 'Masala Dosa', price: '₹90', description: 'Crispy dosa with potato filling' },
        { name: 'Paratha with Dahi', price: '₹90', description: '2 parathas with yogurt' },
        { name: 'Poha', price: '₹60', description: 'Flattened rice breakfast' },
        { name: 'Upma', price: '₹65', description: 'Semolina breakfast' },
        { name: 'Tea/Coffee', price: '₹20', description: 'Hot beverage' }
      ]
    },
    lunch: {
      name: 'Lunch',
      items: [
        { name: 'Special Thali', price: '₹180', description: 'Rice, 3 sabji, dal, roti, salad, sweet, papad' },
        { name: 'Regular Thali', price: '₹150', description: 'Rice, 2 sabji, dal, roti, salad' },
        { name: 'Rajma Chawal', price: '₹120', description: 'Kidney beans curry with rice' },
        { name: 'Chole Chawal', price: '₹120', description: 'Chickpea curry with rice' },
        { name: 'Paneer Thali', price: '₹200', description: 'Paneer dish with complete meal' },
        { name: 'Vegetable Biryani', price: '₹130', description: 'Flavored rice with vegetables' },
        { name: 'Dal Khichdi', price: '₹100', description: 'Simple rice-lentil dish' }
      ]
    },
    dinner: {
      name: 'Dinner',
      items: [
        { name: 'Evening Thali', price: '₹170', description: 'Light dinner with seasonal vegetables' },
        { name: 'Roti-Sabji Combo', price: '₹120', description: '3 rotis with 2 vegetables' },
        { name: 'Dal-Rice Special', price: '₹90', description: 'Dal with steamed rice' },
        { name: 'Mixed Veg Curry', price: '₹140', description: 'Assorted vegetables in gravy' },
        { name: 'Aloo Paratha', price: '₹100', description: 'Stuffed paratha with curd' },
        { name: 'Vegetable Pulao', price: '₹110', description: 'Vegetable rice dish' }
      ]
    },
    special: {
      name: 'Special & Pooja Food',
      items: [
        { name: 'Satvik Thali', price: '₹220', description: 'No onion, no garlic pure meal' },
        { name: 'Prasad Pack', price: '₹250', description: 'Temple style offering food' },
        { name: 'Havan Samagri Package', price: '₹500', description: 'Complete ritual materials' },
        { name: 'Special Bhog', price: '₹300', description: 'Offering for deities' },
        { name: 'Jain Thali', price: '₹200', description: 'Without root vegetables' },
        { name: 'Annadanam Package', price: '₹1000', description: 'Feeding 10 people' }
      ]
    },
    snacks: {
      name: 'Snacks & Beverages',
      items: [
        { name: 'Samosa', price: '₹20', description: '2 pieces with chutney' },
        { name: 'Kachori', price: '₹25', description: 'Stuffed fried snack' },
        { name: 'Pakora', price: '₹30', description: 'Mixed vegetable fritters' },
        { name: 'Fresh Juice', price: '₹40', description: 'Seasonal fruit juice' },
        { name: 'Lassi', price: '₹50', description: 'Sweet yogurt drink' },
        { name: 'Mineral Water', price: '₹20', description: '1 liter bottle' }
      ]
    }
  };

  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Food Menu</h1>
        <p>Complete Vegetarian Menu for Gangasagar Pilgrims</p>
      </div>

      {/* Category Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
        {Object.keys(menuCategories).map(category => (
          <button
            key={category}
            className={`food-category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {menuCategories[category].name}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="services-grid">
        {menuCategories[activeCategory].items.map((item, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3>{item.name}</h3>
                  <p style={{ color: '#666', marginTop: '0.5rem' }}>{item.description}</p>
                </div>
                <div style={{ 
                  backgroundColor: '#27ae60', 
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontWeight: 'bold'
                }}>
                  {item.price}
                </div>
              </div>
              <button 
                className="btn btn-primary mt-2"
                onClick={() => {
                  const message = `Order: ${item.name} - ${item.price}\n${item.description}`;
                  window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Special Notes */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>📝 Menu Notes</h2>
          <div className="mt-2">
            <p>✅ All prices include taxes</p>
            <p>✅ Minimum order: ₹200 for delivery</p>
            <p>✅ Delivery time: 30-45 minutes</p>
            <p>✅ Packing charges: ₹10 per order</p>
            <p>✅ Customization available on request</p>
            <p>✅ Bulk order discount available for 10+ meals</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-3">
        <div className="cta-buttons">
          <a href="tel:+919933888397" className="btn btn-primary">
            📞 Call to Order Food
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20order%20food%20from%20your%20menu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            💬 WhatsApp Food Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;