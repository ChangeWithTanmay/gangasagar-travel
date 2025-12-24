// src/pages/TourPackages.jsx
import React, { useState } from 'react';
import { FaCheckCircle, FaUsers, FaHotel, FaCar, FaShip, FaUtensils, FaMapMarkedAlt, FaStar } from 'react-icons/fa';

const TourPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState('oneday');

  const packages = [
    {
      id: 'oneday',
      name: '1 Day Gangasagar Darshan',
      price: '₹2,500',
      duration: '1 Day',
      bestFor: 'Quick pilgrimage',
      features: [
        'Guide service (6 hours)',
        'Car service (8 hours)',
        'Lunch (Veg thali)',
        'Boat crossing (return)',
        'Temple entry assistance'
      ],
      description: 'Complete darshan package for day visitors'
    },
    {
      id: 'twoday',
      name: '2 Day Complete Yatra',
      price: '₹4,500',
      duration: '2 Days 1 Night',
      bestFor: 'Families & Groups',
      features: [
        'Guide service (12 hours)',
        'Car service (2 days)',
        'All meals (3 veg meals)',
        'Hotel stay (1 night)',
        'Boat crossing',
        'Beach visit included'
      ],
      description: 'Comprehensive package for complete experience'
    },
    {
      id: 'group',
      name: 'Group Package',
      price: '₹3,500',
      duration: '2 Days',
      bestFor: 'Groups (10+ people)',
      features: [
        'Special group discount',
        'Dedicated group guide',
        'Group transportation',
        'Group meals arrangement',
        'Accommodation in dharamshala',
        'All temple visits'
      ],
      description: 'Economical package for large groups'
    },
    {
      id: 'family',
      name: 'Family Special',
      price: '₹6,000',
      duration: '2 Days 1 Night',
      bestFor: 'Family of 4',
      features: [
        'Family friendly guide',
        'Private car for family',
        'Family room hotel stay',
        'All meals (veg)',
        'Special rituals assistance',
        'Photography service'
      ],
      description: 'Premium package for family comfort'
    }
  ];

  const inclusions = [
    { icon: <FaCheckCircle />, item: 'All government taxes' },
    { icon: <FaUsers />, item: 'Guide charges' },
    { icon: <FaCar />, item: 'Transportation fuel & driver' },
    { icon: <FaUtensils />, item: 'Meals as per package' },
    { icon: <FaHotel />, item: 'Accommodation as per package' },
    { icon: <FaShip />, item: 'Boat tickets' },
    { icon: <FaMapMarkedAlt />, item: 'All entry fees' },
    { icon: <FaStar />, item: '24×7 support' }
  ];

  const exclusions = [
    'Personal expenses',
    'Additional food/snacks',
    'Tips to guide/driver',
    'Travel insurance',
    'Any emergency evacuation',
    'Anything not mentioned in inclusions'
  ];

  const itinerary = {
    oneday: [
      { time: '6:00 AM', activity: 'Boat crossing to Sagar Island' },
      { time: '7:30 AM', activity: 'Arrival & hotel check-in (if needed)' },
      { time: '8:00 AM', activity: 'Kapil Muni Temple darshan' },
      { time: '10:00 AM', activity: 'Gangasagar beach visit' },
      { time: '1:00 PM', activity: 'Lunch break' },
      { time: '2:30 PM', activity: 'Bharat Seva Ashram visit' },
      { time: '4:00 PM', activity: 'Local market & shopping' },
      { time: '5:00 PM', activity: 'Return boat crossing' }
    ],
    twoday: [
      { time: 'Day 1', activity: 'Arrival, temple darshan, beach visit, overnight stay' },
      { time: 'Day 2', activity: 'Morning rituals, ashram visits, shopping, departure' }
    ]
  };

  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Tour Packages</h1>
        <p>Complete Pilgrimage Packages for Gangasagar Yatra</p>
      </div>

      {/* Package Selection */}
      <section>
        <h2 className="section-title">Choose Your Package</h2>
        <div className="cta-buttons mb-3">
          {packages.map(pkg => (
            <button
              key={pkg.id}
              className={`btn ${selectedPackage === pkg.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Selected Package Details */}
        {packages
          .filter(pkg => pkg.id === selectedPackage)
          .map(pkg => (
            <div key={pkg.id} className="service-card mb-3">
              <div className="service-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div>
                    <h2>{pkg.name}</h2>
                    <p style={{ color: '#666' }}>{pkg.description}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e74c3c' }}>{pkg.price}</div>
                    <div style={{ color: '#3498db', fontWeight: 'bold' }}>{pkg.duration}</div>
                    <div style={{ color: '#27ae60' }}>Best for: {pkg.bestFor}</div>
                  </div>
                </div>

                <div className="mt-2">
                  <h3>Package Includes:</h3>
                  <div className="mt-1">
                    {pkg.features.map((feature, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ color: '#27ae60', marginRight: '0.5rem' }}>✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-2">
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      const message = `I want to book: ${pkg.name} package (${pkg.price})`;
                      window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* Itinerary */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Package Itinerary</h2>
            <div className="mt-2">
              {selectedPackage === 'oneday' || selectedPackage === 'twoday' ? (
                itinerary[selectedPackage].map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    marginBottom: '1rem',
                    paddingBottom: '1rem',
                    borderBottom: index < itinerary[selectedPackage].length - 1 ? '1px solid #eee' : 'none'
                  }}>
                    <div style={{ 
                      backgroundColor: '#3498db',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      minWidth: '100px',
                      textAlign: 'center',
                      marginRight: '1rem'
                    }}>
                      {item.time}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {item.activity}
                    </div>
                  </div>
                ))
              ) : (
                <p>Custom itinerary available based on group requirements</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="mt-3">
        <div className="services-grid">
          {/* Inclusions */}
          <div className="service-card">
            <div className="service-content">
              <h2 style={{ color: '#27ae60' }}>✅ Package Inclusions</h2>
              <div className="mt-2">
                {inclusions.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span style={{ color: '#27ae60', marginRight: '0.8rem' }}>
                      {item.icon}
                    </span>
                    <span>{item.item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exclusions */}
          <div className="service-card">
            <div className="service-content">
              <h2 style={{ color: '#e74c3c' }}>❌ Package Exclusions</h2>
              <div className="mt-2">
                {exclusions.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span style={{ color: '#e74c3c', marginRight: '0.8rem' }}>✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Custom Package Builder</h2>
            <p className="mt-1">Don't see what you need? Build your own package:</p>
            
            <div className="mt-2">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <input type="checkbox" id="guide" style={{ marginRight: '1rem' }} />
                <label htmlFor="guide">Travel Guide Service</label>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <input type="checkbox" id="car" style={{ marginRight: '1rem' }} />
                <label htmlFor="car">Car Service</label>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <input type="checkbox" id="food" style={{ marginRight: '1rem' }} />
                <label htmlFor="food">Food Service</label>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <input type="checkbox" id="hotel" style={{ marginRight: '1rem' }} />
                <label htmlFor="hotel">Hotel Booking</label>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <input type="checkbox" id="boat" style={{ marginRight: '1rem' }} />
                <label htmlFor="boat">Boat Booking</label>
              </div>
              
              <button 
                className="btn btn-primary mt-2"
                onClick={() => {
                  const message = "I want to create a custom package for Gangasagar Yatra";
                  window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Terms */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Booking Terms & Conditions</h2>
            <div className="mt-2">
              <p>✅ 50% advance payment required for confirmation</p>
              <p>✅ Balance payment on arrival</p>
              <p>✅ Cancellation 48 hours before: Full refund</p>
              <p>✅ Cancellation 24 hours before: 50% refund</p>
              <p>✅ No refund for no-show</p>
              <p>✅ Package rates valid for current season only</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-3">
        <h2>Ready for Your Spiritual Journey?</h2>
        <p className="mt-1">Book your complete pilgrimage package today</p>
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn btn-primary">
            📞 Call for Package Booking
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20a%20tour%20package%20for%20Ganga%20Sagar%20Yatra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            💬 WhatsApp Package Details
          </a>
        </div>
        <p className="mt-2" style={{ color: '#27ae60', fontWeight: 'bold' }}>
          🎁 Special Offer: Book 3+ packages and get 10% group discount!
        </p>
      </div>
    </div>
  );
};

export default TourPackages;