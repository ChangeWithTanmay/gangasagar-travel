// src/pages/TravelGuide.jsx
import React from 'react';

const TravelGuide = () => {
  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Travel Guide Service</h1>
        <p>Expert local guides for your spiritual journey</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <span>👨‍🏫</span>
          </div>
          <div className="service-content">
            <h3>Who are our guides?</h3>
            <p>Our guides are local experts with extensive knowledge about Kapil Muni Temple history, rituals, and the surrounding areas.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <span>🗣️</span>
          </div>
          <div className="service-content">
            <h3>Languages Supported</h3>
            <p>We provide guides fluent in Bengali, Hindi, and English to cater to pilgrims from all over India.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <span>🏛️</span>
          </div>
          <div className="service-content">
            <h3>Temple & Sightseeing</h3>
            <p>Complete tour of Kapil Muni Temple, Gangasagar beach, Bharat Seva Ashram, and other important sites.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <span>👨‍👩‍👧‍👦</span>
          </div>
          <div className="service-content">
            <h3>Group & Family Guide</h3>
            <p>Specialized guides for groups and families, ensuring everyone gets personalized attention.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <h2>Book Your Guide Now</h2>
        <p className="mt-1">Starting from ₹500 per day</p>
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn btn-primary">
            📞 Call to Book Guide
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20a%20travel%20guide%20for%20Ganga%20Sagar" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            💬 WhatsApp for Guide
          </a>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;