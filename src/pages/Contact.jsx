// src/pages/Contact.jsx
import React from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Contact Us</h1>
        <p>Get in touch for your Gangasagar pilgrimage planning</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon" style={{ backgroundColor: '#3498db' }}>
            <FaPhone size={30} />
          </div>
          <div className="service-content">
            <h3>Phone Number</h3>
            <p>+91 9933888397</p>
            <a href="tel:+919933888397" className="btn btn-primary">
              Call Now
            </a>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon" style={{ backgroundColor: '#25d366' }}>
            <FaWhatsapp size={30} />
          </div>
          <div className="service-content">
            <h3>WhatsApp</h3>
            <p>+91 9933888397</p>
            <a 
              href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20Ganga%20Sagar%20Yatra%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              WhatsApp Now
            </a>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon" style={{ backgroundColor: '#e74c3c' }}>
            <FaMapMarkerAlt size={30} />
          </div>
          <div className="service-content">
            <h3>Address</h3>
            <p>Gangasagar, Sagar Island<br />South 24 Parganas<br />West Bengal - 743373</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon" style={{ backgroundColor: '#f39c12' }}>
            <FaClock size={30} />
          </div>
          <div className="service-content">
            <h3>Service Hours</h3>
            <p>24×7 Support<br />All days including holidays</p>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h2 className="section-title">Service Area</h2>
        <div className="service-card">
          <div className="service-content">
            <p>We cover all major points in Gangasagar:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
              <li>Kapil Muni Temple Area</li>
              <li>Gangasagar Beach</li>
              <li>Bharat Seva Ashram</li>
              <li>Kachuberia Ferry Point</li>
              <li>All hotels and dharamshalas in the area</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="map-container mt-3">
        <iframe 
          title="Gangasagar Contact Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.631897141211!2d88.07706427503112!3d22.03666587973424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02ee5616b61f2d%3A0xce1e35cbf8e9bd0b!2sKapil%20Muni%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-center mt-3">
        <div className="cta-buttons">
          <a href="tel:+919933888397" className="btn btn-primary">
            📞 Emergency Contact
          </a>
          <a 
            href="https://wa.me/917029675532?text=EMERGENCY:%20Need%20immediate%20assistance%20at%20Ganga%20Sagar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            🆘 Emergency WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;