// src/pages/VegFoodBooking.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaShippingFast, FaClock, FaStar } from 'react-icons/fa';

const VegFoodBooking = () => {
  const [selectedMeal, setSelectedMeal] = useState('breakfast');
  
  const foodCategories = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      items: [
        { name: 'Puri-Sabji', price: '₹80', desc: 'Freshly made puri with potato curry' },
        { name: 'Chole Bhature', price: '₹100', desc: 'Spicy chickpeas with fried bread' },
        { name: 'Idli-Sambar', price: '₹70', desc: 'Soft idlis with sambar and chutney' },
        { name: 'Paratha with Dahi', price: '₹90', desc: 'Stuffed paratha with yogurt' },
        { name: 'Poha', price: '₹60', desc: 'Flattened rice with peanuts and spices' }
      ]
    },
    {
      id: 'lunch',
      name: 'Lunch',
      items: [
        { name: 'Thali Meal', price: '₹150', desc: 'Rice, 2 sabji, dal, chapati, salad, sweet' },
        { name: 'Rajma Chawal', price: '₹120', desc: 'Kidney beans curry with rice' },
        { name: 'Paneer Thali', price: '₹180', desc: 'Paneer dish, rice, dal, roti, salad' },
        { name: 'Vegetable Biryani', price: '₹130', desc: 'Flavorful rice with mixed vegetables' },
        { name: 'South Indian Meal', price: '₹160', desc: 'Rice, sambar, rasam, 3 curries, papad' }
      ]
    },
    {
      id: 'dinner',
      name: 'Dinner',
      items: [
        { name: 'Special Thali', price: '₹170', desc: 'Evening special with extra items' },
        { name: 'Khichdi', price: '₹100', desc: 'Rice-lentil porridge with ghee' },
        { name: 'Roti-Sabji', price: '₹110', desc: 'Fresh rotis with seasonal vegetables' },
        { name: 'Dal-Rice Combo', price: '₹90', desc: 'Simple and light dinner option' },
        { name: 'Mixed Veg Curry', price: '₹140', desc: 'Assorted vegetables in gravy' }
      ]
    },
    {
      id: 'special',
      name: 'Special Pooja Food',
      items: [
        { name: 'Satvik Thali', price: '₹200', desc: 'No onion, no garlic pure meal' },
        { name: 'Prasad Pack', price: '₹250', desc: 'Offering food for temple rituals' },
        { name: 'Havan Samagri + Food', price: '₹500', desc: 'Complete ritual package' },
        { name: 'Special Bhog', price: '₹300', desc: 'Temple style offering meal' }
      ]
    }
  ];

  const features = [
    {
      icon: <FaLeaf />,
      title: '100% Vegetarian',
      desc: 'Pure vegetarian food prepared with devotion'
    },
    {
      icon: <FaStar />,
      title: 'Hygienic Promise',
      desc: 'Prepared in clean kitchen with quality ingredients'
    },
    {
      icon: <FaShippingFast />,
      title: 'Home Delivery',
      desc: 'Delivered to your hotel or temple area'
    },
    {
      icon: <FaClock />,
      title: 'Freshly Prepared',
      desc: 'Cooked fresh for every meal order'
    }
  ];

  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Vegetarian Food Service</h1>
        <p>100% Pure & Hygienic Vegetarian Meals for Pilgrims</p>
      </div>

      {/* Features Section */}
      <section className="mt-3">
        <h2 className="section-title">Our Food Promise</h2>
        <div className="services-grid">
          {features.map((feature, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#27ae60' }}>
                {feature.icon}
              </div>
              <div className="service-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meal Categories */}
      <section className="mt-3">
        <h2 className="section-title">Food Categories</h2>
        <div className="cta-buttons mb-3">
          {foodCategories.map(category => (
            <button
              key={category.id}
              className={`btn ${selectedMeal === category.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedMeal(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="services-grid">
          {foodCategories
            .find(cat => cat.id === selectedMeal)
            ?.items.map((item, index) => (
              <div key={index} className="service-card">
                <div className="service-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <h3>{item.name}</h3>
                      <p className="mt-1" style={{ color: '#27ae60', fontWeight: 'bold' }}>{item.price}</p>
                    </div>
                  </div>
                  <p className="mt-1">{item.desc}</p>
                  <button 
                    className="btn btn-primary mt-2"
                    onClick={() => {
                      const message = `I want to order: ${item.name} (${item.price})`;
                      window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Booking Options */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Booking Options</h2>
            <div className="mt-2">
              <h3>📱 Single Meal Booking</h3>
              <p>Order individual meals as needed. Perfect for small groups or individuals.</p>
              
              <h3 className="mt-2">👨‍👩‍👧‍👦 Group Meal Package</h3>
              <p>Special rates for groups of 10+ people. Includes all three meals.</p>
              
              <h3 className="mt-2">📅 Full Day Package</h3>
              <p>Breakfast + Lunch + Dinner: ₹400 per person</p>
              
              <h3 className="mt-2">📍 Delivery Areas</h3>
              <p>We deliver to all hotels, dharamshalas, and temple areas in Gangasagar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Instructions */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Special Dietary Requirements</h2>
            <p>We can accommodate:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
              <li>No onion, no garlic (Satvik food)</li>
              <li>Jain food (without root vegetables)</li>
              <li>Less spicy or customized spice levels</li>
              <li>Special meals for elderly and children</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-3">
        <h2>Ready to Order?</h2>
        <p className="mt-1">Book your meals in advance to ensure availability</p>
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn btn-primary">
            📞 Call for Food Booking
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20food%20service%20for%20Ganga%20Sagar%20Yatra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            💬 WhatsApp Food Order
          </a>
          <Link to="/food-menu" className="btn btn-secondary">
            📄 View Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VegFoodBooking;