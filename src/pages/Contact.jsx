import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaClock, FaCar, FaHotel, FaShip, FaUserTie, FaHeadset } from 'react-icons/fa';

const Contact = () => {
  // Schema.org markup for Local Business
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gangasagar Yatra Services",
    "description": "Complete Gangasagar pilgrimage services including travel guide, car service, hotel booking, food, and boat booking for Kapil Muni Temple",
    "image": "https://yourwebsite.com/images/gangasagar-logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gangasagar, Sagar Island",
      "addressLocality": "South 24 Parganas",
      "addressRegion": "West Bengal",
      "postalCode": "743373",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.6443",
      "longitude": "88.0585"
    },
    "url": "https://yourwebsite.com",
    "telephone": "+919933888397",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://facebook.com/yourpage",
      "https://instagram.com/yourprofile"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gangasagar Services",
      "itemListElement": [
        { "@type": "Offer", "name": "Travel Guide Service" },
        { "@type": "Offer", "name": "Car Service" },
        { "@type": "Offer", "name": "Hotel Booking" },
        { "@type": "Offer", "name": "Vegetarian Food Service" },
        { "@type": "Offer", "name": "Boat Booking" }
      ]
    }
  };

  // FAQ Schema for common questions
  const contactFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your contact hours for Gangasagar booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide 24×7 support for all Gangasagar pilgrimage bookings. You can call or WhatsApp us anytime, including weekends and holidays."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly do you respond to Gangasagar booking inquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We respond within 15-30 minutes during normal hours, and within 1 hour for late night inquiries. WhatsApp messages get the fastest response."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best way to contact for urgent Gangasagar bookings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For urgent Gangasagar bookings, call +91 99338 88397 for immediate assistance. WhatsApp is also available for quick responses."
        }
      }
    ]
  };

  return (
    <div className="container p-2">
      {/* SEO Head Section */}
      <Helmet>
        <title>Contact Gangasagar Yatra Services | 24×7 Support: +91 99338 88397</title>
        <meta 
          name="description" 
          content="Contact Gangasagar pilgrimage experts 24×7 at +91 99338 88397. WhatsApp: +91 70296 75532. Get instant help for travel guide, hotel, car, food & boat booking." 
        />
        <meta 
          name="keywords" 
          content="contact Gangasagar, Gangasagar booking number, Gangasagar WhatsApp number, Kapil Muni Temple contact, Sagar Island tour operator, Gangasagar emergency contact" 
        />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactFAQSchema)}
        </script>
      </Helmet>

      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Contact Gangasagar Yatra Services - 24×7 Pilgrimage Support</h1>
        <p>Get Instant Assistance for Your Gangasagar Pilgrimage Planning & Booking</p>
      </div>

      {/* Emergency Contact Banner */}
      <div className="service-card mb-3" style={{ 
        backgroundColor: '#dc3545', 
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="service-content">
          <h2>🚨 24×7 Emergency Contact for Gangasagar</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>📞 +91 99338 88397</div>
              <div>Main Emergency Line</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>💬 +91 70296 75532</div>
              <div>24×7 WhatsApp Support</div>
            </div>
          </div>
          <div className="cta-buttons mt-2">
            <a href="tel:+919933888397" className="btn" style={{ 
              backgroundColor: 'white', 
              color: '#dc3545',
              fontWeight: 'bold',
              margin: '0.5rem'
            }}>
              🚨 Call Emergency Now
            </a>
            <a 
              href="https://wa.me/917029675532?text=EMERGENCY:%20Need%20immediate%20assistance%20for%20Gangasagar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ 
                backgroundColor: '#25d366', 
                color: 'white',
                fontWeight: 'bold',
                margin: '0.5rem'
              }}
            >
              🆘 Emergency WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Contact Options */}
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon" style={{ backgroundColor: '#3498db' }}>
            <FaPhone size={30} />
          </div>
          <div className="service-content">
            <h3>📞 Primary Contact Number</h3>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50' }}>
              +91 99338 88397
            </p>
            <p>Main booking line for all Gangasagar services</p>
            <div style={{ marginTop: '1rem' }}>
              <a href="tel:+919933888397" className="btn btn-primary" style={{ marginBottom: '0.5rem', display: 'block' }}>
                📱 Call for Booking
              </a>
              <a 
                href="tel:+919333888397" 
                className="btn btn-secondary" 
                style={{ display: 'block' }}
                onClick={() => navigator.clipboard.writeText('+919933888397')}
              >
                📋 Copy Number
              </a>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon" style={{ backgroundColor: '#25d366' }}>
            <FaWhatsapp size={30} />
          </div>
          <div className="service-content">
            <h3>💬 WhatsApp Booking</h3>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50' }}>
              +91 70296 75532
            </p>
            <p>Fastest response for inquiries & bookings</p>
            <div style={{ marginTop: '1rem' }}>
              <a 
                href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20Gangasagar%20Yatra%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
                style={{ marginBottom: '0.5rem', display: 'block' }}
              >
                💬 Chat on WhatsApp
              </a>
              <button 
                className="btn btn-secondary" 
                style={{ display: 'block' }}
                onClick={() => {
                  const message = "I need information about Gangasagar services";
                  window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                📝 Quick Inquiry
              </button>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon" style={{ backgroundColor: '#e74c3c' }}>
            <FaMapMarkerAlt size={30} />
          </div>
          <div className="service-content">
            <h3>📍 Our Location</h3>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              Gangasagar, Sagar Island
            </p>
            <p>
              South 24 Parganas District<br />
              West Bengal - 743373<br />
              India
            </p>
            <p style={{ marginTop: '0.5rem', color: '#666' }}>
              <strong>Coordinates:</strong> 21.6443° N, 88.0585° E
            </p>
            <a 
              href="https://maps.google.com/?q=Kapil+Muni+Temple+Gangasagar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              🗺️ View on Google Maps
            </a>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon" style={{ backgroundColor: '#9b59b6' }}>
            <FaHeadset size={30} />
          </div>
          <div className="service-content">
            <h3>⏰ Service Hours</h3>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#27ae60' }}>
              24×7 Support Available
            </p>
            <p>All days including weekends & holidays</p>
            <div style={{ marginTop: '1rem' }}>
              <p><strong>Response Time:</strong></p>
              <p>• WhatsApp: Within 15 minutes</p>
              <p>• Calls: Immediate answer</p>
              <p>• Email: Within 2 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Department-wise Contacts */}
      <div className="mt-3">
        <h2 className="section-title">📞 Department-wise Contact Numbers</h2>
        <div className="services-grid mt-2">
          {[
            { 
              icon: <FaUserTie />, 
              title: "Travel Guide Booking", 
              number: "+91 99338 88397", 
              color: "#3498db",
              desc: "Expert guides for Kapil Muni Temple"
            },
            { 
              icon: <FaCar />, 
              title: "Car Service", 
              number: "+91 99338 88397", 
              color: "#e74c3c",
              desc: "Taxi & transport booking"
            },
            { 
              icon: <FaHotel />, 
              title: "Hotel Booking", 
              number: "+91 99338 88397", 
              color: "#f39c12",
              desc: "Hotel & dharamshala booking"
            },
            { 
              icon: <FaShip />, 
              title: "Boat Service", 
              number: "+91 99338 88397", 
              color: "#1abc9c",
              desc: "Sagar Island ferry booking"
            }
          ].map((dept, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: dept.color }}>
                {dept.icon}
              </div>
              <div className="service-content">
                <h3>{dept.title}</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
                  {dept.number}
                </p>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{dept.desc}</p>
                <div style={{ marginTop: '1rem' }}>
                  <a href={`tel:${dept.number.replace(/\s/g, '')}`} className="btn btn-primary">
                    Call for {dept.title.split(' ')[0]}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Area */}
      <div className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>🗺️ Our Gangasagar Service Coverage Area</h2>
            <p>We provide complete services across all major points in Gangasagar:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <h4>🏛️ Temple Area</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Kapil Muni Temple</li>
                  <li>Main Beach Confluence</li>
                  <li>Bathing Ghats</li>
                  <li>Prayer Halls</li>
                </ul>
              </div>
              <div>
                <h4>🏨 Accommodation</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>All hotels in Sagar Island</li>
                  <li>Government dharamshalas</li>
                  <li>Private guest houses</li>
                  <li>Ashram accommodations</li>
                </ul>
              </div>
              <div>
                <h4>🚗 Transport Points</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Kachuberia Ferry Point</li>
                  <li>Boat jetty points</li>
                  <li>Parking areas</li>
                  <li>Pickup/drop points</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Placeholder */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>📝 Send Us a Message</h2>
          <p>For detailed inquiries, please contact us directly via call or WhatsApp for fastest response.</p>
          
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Quick Contact Options:</h4>
            <div className="cta-buttons mt-1">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const message = "I want to inquire about Gangasagar services";
                  window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                💬 WhatsApp Inquiry
              </button>
              <a href="tel:+919933888397" className="btn btn-success">
                📞 Call for Quote
              </a>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  const subject = "Gangasagar Yatra Inquiry";
                  const body = "Dear Gangasagar Yatra Services,\n\nI would like to inquire about the following:\n\n1. \n2. \n3. \n\nThank you.";
                  window.location.href = `mailto:contact@gangasagaryatra.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                📧 Email Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Guarantee */}
      <div className="service-card mt-3" style={{ backgroundColor: '#e8f5e9', border: '1px solid #c8e6c9' }}>
        <div className="service-content">
          <h2 style={{ color: '#27ae60' }}>⚡ Our Response Time Guarantee</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: '#27ae60' }}>15 min</div>
              <div>WhatsApp Response</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: '#3498db' }}>Instant</div>
              <div>Call Answer</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: '#f39c12' }}>2 hours</div>
              <div>Email Response</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', color: '#9b59b6' }}>24×7</div>
              <div>Service Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-3" style={{ 
        backgroundColor: '#2c3e50', 
        color: 'white',
        padding: '2rem',
        borderRadius: '8px'
      }}>
        <h2>📞 Call Now for Instant Gangasagar Booking Assistance</h2>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>
          +91 99338 88397
        </div>
        <p>Your complete Gangasagar pilgrimage solution is just one call away!</p>
        
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn" style={{ 
            backgroundColor: '#3498db', 
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.8rem 2rem',
            margin: '0.5rem'
          }}>
            📞 Tap to Call Now
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20need%20immediate%20help%20with%20Gangasagar%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ 
              backgroundColor: '#25d366', 
              color: 'white',
              fontSize: '1.1rem',
              padding: '0.8rem 2rem',
              margin: '0.5rem'
            }}
          >
            💬 Start WhatsApp Chat
          </a>
        </div>
        
        <p className="mt-2" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          🔒 Your privacy is protected. We don't share your contact information.
        </p>
      </div>
    </div>
  );
};

export default Contact;