// src/pages/BoatBooking.jsx
import React from 'react';
import { FaShip, FaShieldAlt, FaUsers, FaClock, FaMoneyBillWave, FaLifeRing } from 'react-icons/fa';

const BoatBooking = () => {
  const boatTypes = [
    {
      name: 'Small Boat',
      capacity: '10-15 people',
      price: '₹2000 per trip',
      features: ['Quick service', 'Ideal for families', 'Licensed boatman']
    },
    {
      name: 'Medium Boat',
      capacity: '20-25 people',
      price: '₹3500 per trip',
      features: ['Group booking', 'Economical', 'Life jackets provided']
    },
    {
      name: 'Large Boat',
      capacity: '40-50 people',
      price: '₹6000 per trip',
      features: ['Big groups', 'Safe & stable', 'Experienced crew']
    },
    {
      name: 'Private Boat',
      capacity: '4-6 people',
      price: '₹1500 per trip',
      features: ['Exclusive use', 'Flexible timing', 'Personal service']
    }
  ];

  const safetyFeatures = [
    { icon: <FaShieldAlt />, feature: 'Licensed Boats', desc: 'Government approved vessels' },
    { icon: <FaLifeRing />, feature: 'Life Jackets', desc: 'Available for all passengers' },
    { icon: <FaUsers />, feature: 'Experienced Crew', desc: 'Trained boat operators' },
    { icon: <FaClock />, feature: 'Weather Updates', desc: 'Safe crossing conditions' }
  ];

  const crossingPoints = [
    { from: 'Kakdwip', to: 'Kachuberia', duration: '30-45 mins', frequency: 'Every hour' },
    { from: 'Namkhana', to: 'Lot 8', duration: '45-60 mins', frequency: 'Every 2 hours' },
    { from: 'Frazergunj', to: 'Sagar Island', duration: '60 mins', frequency: '3 times daily' }
  ];

  const bookingTips = [
    'Book in advance during peak season',
    'Arrive at jetty 30 minutes before departure',
    'Carry minimum luggage for easy boarding',
    'Follow crew instructions for safety'
  ];

  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Boat Booking Service</h1>
        <p>Safe & Licensed River Crossing to Sagar Island</p>
      </div>

      {/* Boat Types */}
      <section>
        <h2 className="section-title">Available Boats</h2>
        <div className="services-grid">
          {boatTypes.map((boat, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#2980b9' }}>
                <FaShip size={30} />
              </div>
              <div className="service-content">
                <h3>{boat.name}</h3>
                <p style={{ color: '#2980b9', fontWeight: 'bold' }}>{boat.capacity}</p>
                <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>{boat.price}</p>
                <div className="mt-1">
                  {boat.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#27ae60', marginRight: '0.5rem' }}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="btn btn-primary mt-2"
                  onClick={() => {
                    const message = `I want to book: ${boat.name} (${boat.capacity})`;
                    window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Book This Boat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Features */}
      <section className="mt-3">
        <h2 className="section-title">Safety First</h2>
        <div className="services-grid">
          {safetyFeatures.map((item, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#27ae60' }}>
                {item.icon}
              </div>
              <div className="service-content">
                <h3>{item.feature}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Crossing Points */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Crossing Points & Schedule</h2>
            <div className="mt-2">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>From</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>To</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Duration</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {crossingPoints.map((point, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '1rem' }}>{point.from}</td>
                      <td style={{ padding: '1rem' }}>{point.to}</td>
                      <td style={{ padding: '1rem' }}>{point.duration}</td>
                      <td style={{ padding: '1rem' }}>{point.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Info */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Timing Information</h2>
            <div className="mt-2">
              <h3>⏰ Regular Schedule:</h3>
              <p>6:00 AM to 6:00 PM daily</p>
              
              <h3 className="mt-2">🌅 Morning Departures:</h3>
              <p>First boat: 6:00 AM (Ideal for early darshan)</p>
              
              <h3 className="mt-2">🌇 Evening Returns:</h3>
              <p>Last boat from Sagar Island: 5:30 PM</p>
              
              <h3 className="mt-2">⚠️ Important:</h3>
              <p>No night crossing due to safety regulations</p>
              <p>Tide timings may affect schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Booking Tips & Guidelines</h2>
            <div className="mt-2">
              {bookingTips.map((tip, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </div>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price Details */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>Pricing Details</h2>
            <div className="mt-2">
              <h3>💰 Individual Tickets:</h3>
              <p>₹150 per person (one way)</p>
              <p>₹250 per person (return)</p>
              
              <h3 className="mt-2">👨‍👩‍👧‍👦 Group Discounts:</h3>
              <p>10+ people: 10% discount</p>
              <p>20+ people: 15% discount</p>
              
              <h3 className="mt-2">🚗 Vehicle Ferry:</h3>
              <p>Car/Bike: Additional charges apply</p>
              <p>Contact for vehicle booking rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-3">
        <h2>Book Your Boat Crossing</h2>
        <p className="mt-1">Ensure your seat for a comfortable river crossing</p>
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn btn-primary">
            📞 Call for Boat Booking
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20boat%20service%20for%20Ganga%20Sagar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            💬 WhatsApp Boat Details
          </a>
        </div>
        <p className="mt-2" style={{ color: '#e74c3c', fontWeight: 'bold' }}>
          ⚠️ Booking confirmation required 2 hours before departure
        </p>
      </div>
    </div>
  );
};

export default BoatBooking;