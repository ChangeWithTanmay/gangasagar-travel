// src/components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, link, linkText }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <span>{icon}</span>
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <Link to={link} className="btn btn-primary">
            {linkText || 'Book Now'}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;