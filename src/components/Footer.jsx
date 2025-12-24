// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-ganga-sagar">About Gangasagar</Link></li>
              <li><Link to="/travel-guide">Travel Guide</Link></li>
              <li><Link to="/car-booking">Car Service</Link></li>
              <li><Link to="/veg-food-booking">Food Service</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/hotel-booking">Hotel Booking</Link></li>
              <li><Link to="/boat-booking">Boat Booking</Link></li>
              <li><Link to="/tour-packages">Tour Packages</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <FaPhone /> +91 9933888397
              </li>
              <li>
                <FaWhatsapp /> +91 9933888397
              </li>
              <li>
                <FaEnvelope /> info@gangasagartravel.com
              </li>
              <li>
                <FaMapMarkerAlt /> Gangasagar, Sagar Island, West Bengal
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gangasagar Travel Services. All rights reserved.</p>
          <p className="mt-1">Your trusted partner for Gangasagar pilgrimage</p>
          
          {/* CTA Buttons in Footer */}
          <div className="cta-buttons mt-2">
            <a href="tel:+919933888397" className="btn btn-primary">
              <FaPhone /> Call Now
            </a>
            <a 
              href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20Ganga%20Sagar%20Yatra%20services" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              <FaWhatsapp /> WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;