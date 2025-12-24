// src/components/StickyButtons.jsx
import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const StickyButtons = () => {
  const phoneNumber = '+919933888397';
  const whatsappNumber = '+917029675532';
  const whatsappMessage = 'Hello, I want to book Gangasagar Yatra services';

  return (
    <div className="sticky-buttons">
      <a 
        href={`tel:${phoneNumber}`}
        className="sticky-btn sticky-call"
        aria-label="Call Now"
      >
        <FaPhone />
      </a>
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-btn sticky-whatsapp"
        aria-label="WhatsApp Booking"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default StickyButtons;