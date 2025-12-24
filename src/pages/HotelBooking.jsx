// src/pages/HotelBooking.jsx
import React, { useState } from 'react';
import { FaHotel, FaHome, FaMoneyBillWave, FaShower, FaWifi, FaParking, FaUtensils, FaSnowflake } from 'react-icons/fa';

const HotelBooking = () => {
  const [selectedType, setSelectedType] = useState('budget');
  
  const hotelTypes = [
    {
      id: 'budget',
      name: 'Budget Hotels',
      price: '₹800-₹1200',
      features: ['AC Room', 'Attached Bathroom', '24hr Hot Water', 'TV'],
      description: 'Basic comfortable rooms near temple area'
    },
    {
      id: 'dharamshala',
      name: 'Dharamshala',
      price: '₹300-₹500',
      features: ['Shared Bathroom', 'Clean Beds', 'Secure Lockers', 'Common Hall'],
      description: 'Simple accommodation for spiritual seekers'
    },
    {
      id: 'family',
      name: 'Family Stay',
      price: '₹1500-₹2500',
      features: ['Family Room', 'Private Bath', 'Hot Water', 'Room Service', 'Food Option'],
      description: 'Spacious rooms suitable for families'
    },
    {
      id: 'premium',
      name: 'Premium Stay',
      price: '₹2500-₹4000',
      features: ['AC Room', 'Private Balcony', '24hr Room Service', 'WiFi', 'Food Included'],
      description: 'Comfortable stay with all amenities'
    }
  ];

  const areas = [
    { name: 'Near Kapil Muni Temple', distance: '5 mins walk', type: 'Temple Proximity' },
    { name: 'Gangasagar Beach Area', distance: '10 mins walk', type: 'Sea View' },
    { name: 'Main Market Area', distance: '15 mins walk', type: 'Shopping Convenience' },
    { name: 'Quiet Zone Area', distance: '20 mins walk', type: 'Peaceful Stay' }
  ];

  const facilities = [
    { icon: <FaShower />, name: 'Hot Water 24×7', desc: 'Available in all rooms' },
    { icon: <FaWifi />, name: 'Free WiFi', desc: 'In premium hotels only' },
    { icon: <FaParking />, name: 'Car Parking', desc: 'Secure parking available' },
    { icon: <FaUtensils />, name: 'Food Service', desc: 'On request or included' },
    { icon: <FaSnowflake />, name: 'AC Rooms', desc: 'Available in budget+ categories' },
    { icon: <FaMoneyBillWave />, name: 'Safe Deposit', desc: 'For valuables security' }
  ];

  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Hotel & Accommodation Booking</h1>
        <p>Comfortable stays for your spiritual journey</p>
      </div>

      {/* Hotel Types */}
      <section>
        <h2 className="section-title">Types of Accommodation</h2>
        <div className="cta-buttons mb-3">
          {hotelTypes.map(type => (
            <button
              key={type.id}
              className={`btn ${selectedType === type.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedType(type.id)}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Selected Hotel Details */}
        <div className="service-card mb-3">
          <div className="service-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>{hotelTypes.find(t => t.id === selectedType)?.name}</h2>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c' }}>
                {hotelTypes.find(t => t.id === selectedType)?.price}/night
              </span>
            </div>
            <p className="mt-1">{hotelTypes.find(t => t.id === selectedType)?.description}</p>
            
            <div className="mt-2">
              <h3>Features:</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                {hotelTypes.find(t => t.id === selectedType)?.features.map((feature, index) => (
                  <span 
                    key={index}
                    style={{
                      backgroundColor: '#f8f9fa',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      border: '1px solid #ddd'
                    }}
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Areas */}
      <section className="mt-3">
        <h2 className="section-title">Available Locations</h2>
        <div className="services-grid">
          {areas.map((area, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#3498db' }}>
                <FaHome size={24} />
              </div>
              <div className="service-content">
                <h3>{area.name}</h3>
                <p style={{ color: '#27ae60', fontWeight: 'bold' }}>{area.distance}</p>
                <p>{area.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="mt-3">
        <h2 className="section-title">Available Facilities</h2>
        <div className="services-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#9b59b6' }}>
                {facility.icon}
              </div>
              <div className="service-content">
                <h3>{facility.name}</h3>
                <p>{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Process */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Booking Process</h2>
            <div className="mt-2">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  1
                </div>
                <div>
                  <h3>Contact Us</h3>
                  <p>Call or WhatsApp with your requirements</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  2
                </div>
                <div>
                  <h3>Check Availability</h3>
                  <p>We check and confirm room availability</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  3
                </div>
                <div>
                  <h3>Payment & Confirmation</h3>
                  <p>Advance payment to confirm booking</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  4
                </div>
                <div>
                  <h3>Check-in Details</h3>
                  <p>Receive hotel details and check-in instructions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-3">
        <h2>Book Your Stay Now</h2>
        <p className="mt-1">Limited rooms available, especially during peak season</p>
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn btn-primary">
            📞 Call for Hotel Booking
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20hotel%20in%20Ganga%20Sagar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            💬 WhatsApp Hotel Details
          </a>
        </div>
        <p className="mt-2" style={{ color: '#666', fontSize: '0.9rem' }}>
          *Advance booking recommended during Gangasagar Mela (Jan 14-15)
        </p>
      </div>
    </div>
  );
};

export default HotelBooking;