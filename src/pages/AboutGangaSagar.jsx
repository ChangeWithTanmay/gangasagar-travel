// src/pages/AboutGangaSagar.jsx
import React from 'react';

const AboutGangaSagar = () => {
  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>About Gangasagar</h1>
        <p>Discover the spiritual significance of this holy pilgrimage site</p>
      </div>

      <div className="service-card mb-3">
        <div className="service-content">
          <h2>History of Gangasagar</h2>
          <p>
            Gangasagar is a sacred place where the holy river Ganga merges with the Bay of Bengal. 
            According to Hindu mythology, this is the place where King Sagar's 60,000 sons attained 
            salvation after being reduced to ashes by Sage Kapil's curse.
          </p>
        </div>
      </div>

      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Kapil Muni Temple Significance</h2>
          <p>
            The Kapil Muni Temple is dedicated to Sage Kapil, who performed severe penance here. 
            The temple is believed to be the spot where the sage sat in meditation for thousands of years.
          </p>
        </div>
      </div>

      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Gangasagar Mela</h2>
          <p>
            Every year on Makar Sankranti (January 14/15), millions of pilgrims gather here to take 
            a holy dip at the confluence. This is the second largest human congregation in India after 
            the Kumbh Mela.
          </p>
        </div>
      </div>

      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Best Time to Visit</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Winter (Oct-Feb):</strong> Pleasant weather, ideal for pilgrimage</li>
            <li><strong>Makar Sankranti:</strong> For Gangasagar Mela experience</li>
            <li><strong>Avoid Monsoon:</strong> Difficult travel conditions</li>
          </ul>
        </div>
      </div>

      <div className="map-container mt-3">
        <iframe 
          title="Gangasagar Detailed Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.631897141211!2d88.07706427503112!3d22.03666587973424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02ee5616b61f2d%3A0xce1e35cbf8e9bd0b!2sKapil%20Muni%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutGangaSagar;