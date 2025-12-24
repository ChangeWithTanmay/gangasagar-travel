// src/pages/Home.jsx
import React from 'react';
import { FaCar, FaUtensils, FaHotel, FaShip, FaMapMarkedAlt, FaStar } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      icon: "👨‍🏫",
      title: "Travel Guide",
      description: "Expert local guides for temple and sightseeing tours",
      link: "/travel-guide",
      linkText: "Book Guide"
    },
    {
      icon: "🚗",
      title: "Car Service",
      description: "Comfortable cars for all pickup points in Sagar Island",
      link: "/car-booking",
      linkText: "Book Car"
    },
    {
      icon: "🍽️",
      title: "Veg Food Booking",
      description: "100% hygienic vegetarian meals delivered to you",
      link: "/veg-food-booking",
      linkText: "Book Food"
    },
    {
      icon: "🏨",
      title: "Hotel Booking",
      description: "Budget hotels and dharamshalas near temple",
      link: "/hotel-booking",
      linkText: "Book Hotel"
    },
    {
      icon: "⛵",
      title: "Boat Booking",
      description: "Safe and licensed boats for river crossing",
      link: "/boat-booking",
      linkText: "Book Boat"
    }
  ];

  const testimonials = [
    {
      text: "Excellent service! The guide was very knowledgeable about Kapil Muni Temple history.",
      author: "Rajesh Kumar, Kolkata"
    },
    {
      text: "Affordable car service with safe drivers. Made our pilgrimage comfortable.",
      author: "Priya Sharma, Delhi"
    },
    {
      text: "The vegetarian food was delicious and hygienic. Highly recommended!",
      author: "Mohan Das, Varanasi"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Complete Gangasagar Yatra Services</h1>
          <p>Travel Guide | Car | Food | Hotel | Boat Booking</p>
          <div className="cta-buttons">
            <a href="tel:+919933888397" className="btn btn-primary">
              📞 Call Now
            </a>
            <a 
              href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20Ganga%20Sagar%20Yatra%20services" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              💬 WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Why Gangasagar Section */}
      <section className="container p-2">
        <div className="text-center mb-3">
          <h2 className="section-title">Why Gangasagar?</h2>
          <div className="mt-2">
            <p>
              Gangasagar is where the holy river Ganga meets the Bay of Bengal. It's one of the most sacred pilgrimage sites in Hinduism.
            </p>
            <p className="mt-1">
              The Kapil Muni Temple here is believed to be the place where Sage Kapil performed severe penance. Taking a holy dip at the confluence during Makar Sankranti is considered highly auspicious.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="container p-2">
        <h2 className="section-title">How Booking Works</h2>
        <div className="services-grid">
          {[
            { step: "1", title: "Choose Service", desc: "Select from our services" },
            { step: "2", title: "Call / WhatsApp", desc: "Contact us for booking" },
            { step: "3", title: "Confirm Booking", desc: "Get confirmation details" },
            { step: "4", title: "Enjoy Yatra", desc: "Experience hassle-free pilgrimage" }
          ].map((item, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#2ecc71' }}>
                <span style={{ fontSize: '2rem' }}>{item.step}</span>
              </div>
              <div className="service-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container p-2 mt-3">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="services-grid">
          {[
            { icon: "🏠", title: "Local Trusted Service", desc: "Established local service providers" },
            { icon: "💰", title: "Affordable Price", desc: "Best prices with no hidden charges" },
            { icon: "🥗", title: "Hygienic Veg Food", desc: "100% vegetarian and hygienic meals" },
            { icon: "⏰", title: "24×7 Support", desc: "Round the clock customer support" }
          ].map((item, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#e74c3c' }}>
                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
              </div>
              <div className="service-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Testimonials</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container p-2">
        <h2 className="section-title">Our Location</h2>
        <div className="map-container">
          <iframe 
            title="Gangasagar Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.631897141211!2d88.07706427503112!3d22.03666587973424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02ee5616b61f2d%3A0xce1e35cbf8e9bd0b!2sKapil%20Muni%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;