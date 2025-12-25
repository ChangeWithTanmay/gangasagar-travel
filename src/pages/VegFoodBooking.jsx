import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLeaf, FaShippingFast, FaClock, FaStar, FaUtensils, FaAppleAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const VegFoodBooking = () => {
  const [selectedMeal, setSelectedMeal] = useState('breakfast');
  
  // Schema.org markup for Food Service
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "Gangasagar Vegetarian Food Service",
    "description": "100% pure vegetarian and hygienic meals for Gangasagar pilgrims. Satvik food, Jain meals, and special pooja food packages available.",
    "servesCuisine": "Indian Vegetarian, Satvik, Jain",
    "areaServed": {
      "@type": "City",
      "name": "Sagar Island, West Bengal"
    },
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Breakfast",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Puri-Sabji", "description": "Freshly made puri with potato curry", "offers": { "@type": "Offer", "price": "80", "priceCurrency": "INR" } },
            { "@type": "MenuItem", "name": "Chole Bhature", "description": "Spicy chickpeas with fried bread", "offers": { "@type": "Offer", "price": "100", "priceCurrency": "INR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Lunch",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Thali Meal", "description": "Rice, 2 sabji, dal, chapati, salad, sweet", "offers": { "@type": "Offer", "price": "150", "priceCurrency": "INR" } }
          ]
        }
      ]
    },
    "openingHours": "05:00-22:00",
    "telephone": "+919933888397"
  };

  const foodCategories = [
    {
      id: 'breakfast',
      name: 'Breakfast 🍳',
      timing: '5:30 AM - 10:00 AM',
      items: [
        { name: 'Puri-Sabji', price: '₹80', priceValue: 80, desc: 'Freshly made puri with potato curry, pickle', bestseller: true },
        { name: 'Chole Bhature', price: '₹100', priceValue: 100, desc: 'Spicy chickpeas with fried bread, onion salad' },
        { name: 'Idli-Sambar', price: '₹70', priceValue: 70, desc: 'Soft idlis with sambar and 3 types of chutney' },
        { name: 'Paratha with Dahi', price: '₹90', priceValue: 90, desc: 'Aloo/Mooli paratha with fresh yogurt', bestseller: true },
        { name: 'Poha', price: '₹60', priceValue: 60, desc: 'Flattened rice with peanuts, onions, and spices' },
        { name: 'Tea/ Coffee + Biscuits', price: '₹40', priceValue: 40, desc: 'Hot beverage with cookies' }
      ]
    },
    {
      id: 'lunch',
      name: 'Lunch 🍚',
      timing: '11:30 AM - 3:00 PM',
      items: [
        { name: 'Gangasagar Special Thali', price: '₹150', priceValue: 150, desc: 'Rice, 2 sabji, dal, 2 chapati, salad, papad, sweet', bestseller: true },
        { name: 'Rajma Chawal', price: '₹120', priceValue: 120, desc: 'Kidney beans curry with steamed rice, salad' },
        { name: 'Paneer Thali', price: '₹180', priceValue: 180, desc: 'Paneer butter masala, rice, dal, roti, raita, salad', bestseller: true },
        { name: 'Vegetable Biryani', price: '₹130', priceValue: 130, desc: 'Flavorful rice with mixed vegetables, raita' },
        { name: 'South Indian Meal', price: '₹160', priceValue: 160, desc: 'Rice, sambar, rasam, 3 curries, papad, buttermilk' },
        { name: 'Simple Dal-Chawal', price: '₹90', priceValue: 90, desc: 'Lentil curry with rice and pickle' }
      ]
    },
    {
      id: 'dinner',
      name: 'Dinner 🌙',
      timing: '7:00 PM - 10:00 PM',
      items: [
        { name: 'Evening Special Thali', price: '₹170', priceValue: 170, desc: 'Rice, 3 sabji, dal, chapati, salad, papad, sweet', bestseller: true },
        { name: 'Khichdi Special', price: '₹100', priceValue: 100, desc: 'Rice-lentil porridge with ghee, pickle, papad' },
        { name: 'Roti-Sabji Combo', price: '₹110', priceValue: 110, desc: '4 fresh rotis with seasonal vegetable curry' },
        { name: 'Dal-Rice Simple', price: '₹90', priceValue: 90, desc: 'Simple and light dinner option' },
        { name: 'Mixed Veg Curry', price: '₹140', priceValue: 140, desc: 'Assorted vegetables in rich gravy with chapati' },
        { name: 'Poha Dinner', price: '₹70', priceValue: 70, desc: 'Light dinner option' }
      ]
    },
    {
      id: 'special',
      name: 'Special Pooja Food 🙏',
      timing: 'Pre-order required',
      items: [
        { name: 'Satvik Thali (No Onion-Garlic)', price: '₹200', priceValue: 200, desc: 'Pure satvik meal for rituals and fasting', bestseller: true },
        { name: 'Prasad Pack for Temple', price: '₹250', priceValue: 250, desc: 'Offering food package for Kapil Muni Temple rituals' },
        { name: 'Havan Samagri + Food Package', price: '₹500', priceValue: 500, desc: 'Complete ritual package with all materials' },
        { name: 'Special Bhog Thali', price: '₹300', priceValue: 300, desc: 'Temple style offering meal for special prayers' },
        { name: 'Jain Food Package', price: '₹220', priceValue: 220, desc: 'No root vegetables, special preparation' },
        { name: 'Annadanam Package (50 people)', price: '₹8,000', priceValue: 8000, desc: 'Mass meal donation package' }
      ]
    }
  ];

  const features = [
    {
      icon: <FaLeaf />,
      title: '100% Vegetarian & Satvik',
      desc: 'Pure vegetarian food prepared with devotion. No onion, no garlic options available.',
      color: '#27ae60'
    },
    {
      icon: <FaStar />,
      title: 'Hygienic & Clean Kitchen',
      desc: 'FSSAI standard kitchen with regular hygiene checks and quality ingredients.',
      color: '#f39c12'
    },
    {
      icon: <FaShippingFast />,
      title: 'Free Home Delivery',
      desc: 'Delivered to your hotel, dharamshala or temple area within 30 minutes.',
      color: '#3498db'
    },
    {
      icon: <FaClock />,
      title: 'Freshly Prepared',
      desc: 'Cooked fresh for every order. No pre-cooked or stale food served.',
      color: '#e74c3c'
    },
    {
      icon: <FaAppleAlt />,
      title: 'Custom Dietary Needs',
      desc: 'Special meals for Jain, diabetic, elderly, and children dietary requirements.',
      color: '#9b59b6'
    },
    {
      icon: <FaUtensils />,
      title: 'Eco-Friendly Packaging',
      desc: 'Biodegradable plates and containers for environmentally conscious service.',
      color: '#1abc9c'
    }
  ];

  const mealPackages = [
    {
      name: 'Single Day Package',
      price: '₹400',
      desc: 'Breakfast + Lunch + Dinner',
      features: ['3 meals per day', 'Free delivery', 'Customizable menu', 'Bulk discount available']
    },
    {
      name: 'Group Package (10+ people)',
      price: '₹350/person',
      desc: 'Per day per person',
      features: ['All 3 meals', 'Special group menu', 'Dedicated service', '20% advance booking']
    },
    {
      name: 'Pilgrimage Package (3 Days)',
      price: '₹1,100',
      desc: 'Complete 3-day food plan',
      features: ['9 meals total', 'Variety ensured', 'Special day menu', 'Free water bottles']
    },
    {
      name: 'Annadanam Package',
      price: '₹8,000',
      desc: 'Food donation for 50 people',
      features: ['Mass meal service', 'Temple coordination', 'Complete setup', 'Spiritual merit']
    }
  ];

  return (
    <div className="container p-2">
      {/* SEO Head Section */}
      <Helmet>
        <title>Gangasagar Vegetarian Food Service | Satvik Meals for Pilgrims | ₹60 Onwards</title>
        <meta 
          name="description" 
          content="Book 100% pure vegetarian food at Gangasagar. Satvik meals from ₹60, Jain food, pooja packages, home delivery to hotels and temple area. Hygienic & fresh preparation." 
        />
        <meta 
          name="keywords" 
          content="Gangasagar vegetarian food, satvik food Sagar Island, Kapil Muni Temple food, Jain food Gangasagar, pooja food booking, hotel food delivery Gangasagar, hygienic food for pilgrims" 
        />
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>

      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Gangasagar Vegetarian Food Service - Pure Satvik Meals</h1>
        <p>100% Hygienic & Devotionally Prepared Vegetarian Food for Pilgrims</p>
        <div className="mt-2">
          <span style={{ 
            backgroundColor: '#27ae60', 
            color: 'white', 
            padding: '5px 15px', 
            borderRadius: '20px',
            marginRight: '10px'
          }}>
            🍽️ Starting from ₹60 per meal
          </span>
          <span style={{ 
            backgroundColor: '#3498db', 
            color: 'white', 
            padding: '5px 15px', 
            borderRadius: '20px' 
          }}>
            🚚 Free Delivery to Hotels
          </span>
        </div>
      </div>

      {/* Food Promise Features */}
      <div className="mt-3">
        <h2 className="section-title">✅ Our Gangasagar Food Promise</h2>
        <div className="services-grid mt-2">
          {features.map((feature, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <div className="service-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Packages */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>📦 Gangasagar Food Packages</h2>
          <div className="services-grid mt-2">
            {mealPackages.map((pkg, index) => (
              <div key={index} className="service-card" style={{ border: '2px solid #27ae60' }}>
                <div className="service-content">
                  <div style={{ 
                    backgroundColor: '#27ae60', 
                    color: 'white', 
                    padding: '10px', 
                    textAlign: 'center',
                    margin: '-1rem -1rem 1rem -1rem'
                  }}>
                    <h3 style={{ margin: 0 }}>{pkg.name}</h3>
                  </div>
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e74c3c' }}>
                      {pkg.price}
                    </div>
                    <div style={{ color: '#666' }}>{pkg.desc}</div>
                  </div>
                  <div>
                    {pkg.features.map((feature, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ color: '#27ae60', marginRight: '0.5rem' }}>✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2">
                    <button 
                      className="btn btn-primary"
                      style={{ width: '100%', backgroundColor: '#27ae60', border: 'none' }}
                      onClick={() => {
                        const message = `I want to book: ${pkg.name} Food Package (${pkg.price})`;
                        window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      Book This Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meal Categories */}
      <section className="mt-3">
        <h2 className="section-title">🍽️ Gangasagar Food Menu</h2>
        <div className="cta-buttons mb-3">
          {foodCategories.map(category => (
            <button
              key={category.id}
              className={`btn ${selectedMeal === category.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedMeal(category.id)}
              style={selectedMeal === category.id ? { backgroundColor: '#27ae60', border: 'none' } : {}}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Selected Category Info */}
        <div className="service-card mb-3" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="service-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0 }}>{foodCategories.find(cat => cat.id === selectedMeal)?.name}</h3>
              <div style={{ color: '#e74c3c', fontWeight: 'bold' }}>
                ⏰ {foodCategories.find(cat => cat.id === selectedMeal)?.timing}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="services-grid">
          {foodCategories
            .find(cat => cat.id === selectedMeal)
            ?.items.map((item, index) => (
              <div key={index} className="service-card">
                <div className="service-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={{ margin: 0 }}>{item.name}</h3>
                        {item.bestseller && (
                          <span style={{ 
                            backgroundColor: '#e74c3c', 
                            color: 'white', 
                            padding: '2px 8px', 
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            marginLeft: '10px'
                          }}>
                            🔥 Bestseller
                          </span>
                        )}
                      </div>
                      <p className="mt-1" style={{ fontSize: '0.9rem', color: '#666' }}>{item.desc}</p>
                    </div>
                    <div style={{ textAlign: 'right', marginLeft: '1rem' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c' }}>{item.price}</div>
                      <div style={{ fontSize: '0.8rem', color: '#27ae60' }}>per plate</div>
                    </div>
                  </div>
                  <div className="mt-2" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button 
                      className="btn btn-primary"
                      onClick={() => {
                        const message = `I want to order: ${item.name} (${item.price}) for Gangasagar`;
                        window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      style={{ backgroundColor: '#27ae60', border: 'none' }}
                    >
                      Order Now
                    </button>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => {
                        const message = `I have question about: ${item.name} food item`;
                        window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      Ask Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Dietary Requirements */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>📝 Special Dietary Accommodations</h2>
          <div className="mt-2">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h4>🙏 Satvik Food (No Onion-Garlic)</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Special preparation for rituals</li>
                  <li>Used in temple offerings</li>
                  <li>Available in all meal categories</li>
                  <li>Extra charge: ₹20-50 per meal</li>
                </ul>
              </div>
              <div>
                <h4>☸️ Jain Food Options</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>No root vegetables (potato, onion, garlic)</li>
                  <li>Separate kitchen utensils</li>
                  <li>Special Jain thali available</li>
                  <li>Advance order required (24 hours)</li>
                </ul>
              </div>
              <div>
                <h4>👵 Special Needs</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Soft food for elderly</li>
                  <li>Less spicy for children</li>
                  <li>Diabetic-friendly options</li>
                  <li>Custom spice levels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Information */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>🚚 Food Delivery Information</h2>
          <div className="mt-2">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div>
                <h4>📍 Delivery Areas Covered</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>All hotels in Sagar Island</li>
                  <li>Government dharamshalas</li>
                  <li>Private guest houses</li>
                  <li>Kapil Muni Temple area</li>
                  <li>Beach and confluence point</li>
                </ul>
              </div>
              <div>
                <h4>⏱️ Delivery Timings</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Breakfast: 6:30 AM - 10:00 AM</li>
                  <li>Lunch: 12:00 PM - 3:00 PM</li>
                  <li>Dinner: 7:00 PM - 10:00 PM</li>
                  <li>Emergency orders: 24×7 available</li>
                </ul>
              </div>
              <div>
                <h4>📦 Minimum Order & Charges</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Minimum order: ₹100</li>
                  <li>Free delivery above ₹200</li>
                  <li>Delivery time: 30-45 minutes</li>
                  <li>Hot food guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Process */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>📋 How to Book Gangasagar Food Service</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#27ae60', 
                color: 'white', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <div style={{ fontWeight: 'bold' }}>Choose Food</div>
              <div>Select meals or package</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#27ae60', 
                color: 'white', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <div style={{ fontWeight: 'bold' }}>Specify Details</div>
              <div>Location, time, special needs</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#27ae60', 
                color: 'white', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <div style={{ fontWeight: 'bold' }}>Confirm Order</div>
              <div>Advance payment via UPI</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#27ae60', 
                color: 'white', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem',
                fontWeight: 'bold'
              }}>
                4
              </div>
              <div style={{ fontWeight: 'bold' }}>Receive Food</div>
              <div>Hot delivery at your location</div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-3" style={{ 
        backgroundColor: '#2c3e50', 
        color: 'white',
        padding: '2rem',
        borderRadius: '8px'
      }}>
        <h2>🍽️ Book Your Gangasagar Food Service Now</h2>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0', color: '#f39c12' }}>
          Starting from ₹60 per meal
        </div>
        <p>Enjoy hygienic, delicious vegetarian food during your Gangasagar pilgrimage</p>
        
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn" style={{ 
            backgroundColor: '#27ae60', 
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.8rem 2rem',
            margin: '0.5rem'
          }}>
            📞 Call for Food Booking
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20vegetarian%20food%20service%20for%20Gangasagar%20Yatra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ 
              backgroundColor: '#25d366', 
              color: 'white',
              fontSize: '1.1rem',
              padding: '0.8rem 2rem',
              margin: '0.5rem'
            }}
          >
            💬 WhatsApp Food Order
          </a>
          <button 
            className="btn"
            style={{ 
              backgroundColor: '#3498db', 
              color: 'white',
              fontSize: '1.1rem',
              padding: '0.8rem 2rem',
              margin: '0.5rem'
            }}
            onClick={() => {
              const message = "I need a food package quote for Gangasagar: \n• Number of people: \n• Number of days: \n• Special requirements: ";
              window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            📋 Get Custom Quote
          </button>
        </div>
        
        <div className="mt-2" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          ✅ 100% Vegetarian | ✅ Hygienic Kitchen | ✅ Free Delivery | ✅ Custom Meals Available
        </div>
      </div>
    </div>
  );
};

export default VegFoodBooking;