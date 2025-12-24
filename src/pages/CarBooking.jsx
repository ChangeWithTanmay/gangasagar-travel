// src/pages/CarBooking.jsx
import React from 'react';

const CarBooking = () => {
  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Car Service</h1>
        <p>Comfortable transportation for your Gangasagar pilgrimage</p>
      </div>

      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Available Cars</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Maruti Suzuki Swift Dzire (4+1 seats)</li>
            <li>Toyota Innova (7+1 seats)</li>
            <li>Mahindra Scorpio (7+1 seats)</li>
            <li>Tempo Traveller (12 seats)</li>
            <li>Mini Bus (20+ seats)</li>
          </ul>
        </div>
      </div>

      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Pick-up Points</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Kachuberia:</strong> Main ferry point</li>
            <li><strong>Lot 8:</strong> Secondary pickup point</li>
            <li><strong>Sagar Island:</strong> Any hotel or location</li>
            <li><strong>Custom Pickup:</strong> Available on request</li>
          </ul>
        </div>
      </div>

      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Places Covered</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Kapil Muni Temple</li>
            <li>Gangasagar Beach</li>
            <li>Bharat Seva Ashram</li>
            <li>Gangasagar Lighthouse</li>
            <li>Local market and shops</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-3">
        <h2>Price: Starting from ₹800 per day</h2>
        <p>(Inclusive of driver and fuel)</p>
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn btn-primary">
            📞 Call for Car Booking
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20a%20car%20for%20Ganga%20Sagar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            💬 WhatsApp Car Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarBooking;