import React from 'react';
import { FaCar, FaUtensils, FaHotel, FaShip, FaMapMarkedAlt, FaStar, FaPhone, FaWhatsapp, FaCheckCircle, FaUsers } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  // Schema.org markup for Home Page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Gangasagar Yatra Services",
    "description": "Complete Gangasagar pilgrimage services including travel guide, car rental, hotel booking, vegetarian food service, and boat booking for Sagar Island.",
    "url": "https://gangasagaryatra.vectosmind.com",
    "logo": "https://gangasagaryatra.vectosmind.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919933888397",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["Bengali", "Hindi", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gangasagar, Sagar Island",
      "addressLocality": "South 24 Parganas",
      "addressRegion": "West Bengal",
      "postalCode": "743373",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://facebook.com/gangasagaryatra",
      "https://instagram.com/gangasagaryatra"
    ],
    "priceRange": "₹₹",
    "openingHours": "24/7"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gangasagar Yatra Services",
    "image": "https://gangasagaryatra.vectosmind.com/images/banner.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gangasagar, Sagar Island",
      "addressLocality": "South 24 Parganas",
      "addressRegion": "West Bengal",
      "postalCode": "743373",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.6443",
      "longitude": "88.0585"
    },
    "url": "https://gangasagaryatra.vectosmind.com",
    "telephone": "+919933888397",
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const services = [
    {
      icon: <FaUsers />,
      title: "Travel Guide Service",
      description: "Certified local guides for Kapil Muni Temple history & rituals",
      link: "/travel-guide",
      linkText: "Book Guide from ₹500"
    },
    {
      icon: <FaCar />,
      title: "Car Service Sagar Island",
      description: "Swift Dzire, Innova, Scorpio, Tempo Traveller - 24×7 available",
      link: "/car-booking",
      linkText: "Book Car from ₹800"
    },
    {
      icon: <FaUtensils />,
      title: "Vegetarian Food Booking",
      description: "100% hygienic satvik meals delivered to your accommodation",
      link: "/veg-food-booking",
      linkText: "Book Food from ₹200"
    },
    {
      icon: <FaHotel />,
      title: "Hotel & Dharamshala Booking",
      description: "Budget to comfortable stays near Kapil Muni Temple",
      link: "/hotel-booking",
      linkText: "Book Hotel from ₹500"
    },
    {
      icon: <FaShip />,
      title: "Boat Booking Service",
      description: "Safe licensed boats for Kakdwip to Sagar Island crossing",
      link: "/boat-booking",
      linkText: "Book Boat from ₹150"
    }
  ];

  const testimonials = [
    {
      text: "Excellent Gangasagar guide service! The guide was very knowledgeable about Kapil Muni Temple history and rituals.",
      author: "Rajesh Kumar, Kolkata",
      rating: 5,
      date: "2024-12-15"
    },
    {
      text: "Affordable car service with safe drivers. Made our Gangasagar pilgrimage comfortable and hassle-free.",
      author: "Priya Sharma, Delhi",
      rating: 5,
      date: "2024-12-10"
    },
    {
      text: "The vegetarian food service at Gangasagar was delicious and hygienic. Highly recommended for pilgrims!",
      author: "Mohan Das, Varanasi",
      rating: 4,
      date: "2024-11-28"
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Pilgrims Served" },
    { value: "50+", label: "Certified Guides" },
    { value: "24×7", label: "Support Available" },
    { value: "₹500", label: "Starting Price" }
  ];

  return (
    <div>
      {/* SEO Head Section */}
      <Helmet>
        <title>Gangasagar Yatra 2026 | Complete Pilgrimage Services | Kapil Muni Temple</title>
        <meta
          name="description"
          content="Complete Gangasagar pilgrimage services: Travel guide from ₹500, car service from ₹800, hotel booking from ₹500, vegetarian food, boat booking. Call +91 99338 88397 for instant booking."
        />
        <meta
          name="keywords"
          content="Gangasagar, Ganga Sagar Yatra, Kapil Muni Temple, Sagar Island pilgrimage, Makar Sankranti, Gangasagar hotel booking, Gangasagar car service, Gangasagar boat booking, Gangasagar travel guide, Bengal pilgrimage, Gangasagar package"
        />
        <meta property="og:title" content="Gangasagar Yatra Services - Complete Pilgrimage Booking 2026" />
        <meta property="og:description" content="Trusted Gangasagar services: travel guide from ₹500, car service from ₹800, hotel booking, food & boat booking for Kapil Muni Temple pilgrimage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gangasagaryatra.vectosmind.com" />
        <meta property="og:image" content="https://gangasagaryatra.vectosmind.com/images/og-image.jpg" />
        <link rel="canonical" href="https://gangasagaryatra.vectosmind.com" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero" style={{
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '500px'
      }}>
        {/* Background Slider */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' // Fallback background
        }}>
          {/* Image Slides */}
          {[
            'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600',
            'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600',
            'https://images.unsplash.com/photo-1559661171-4e2b3a4d7e7e?auto=format&fit=crop&w-1600'
          ].map((img, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0,
                transition: 'opacity 1s ease-in-out',
                animation: `slideShow 15s infinite ${index * 5}s`
              }}
              onError={(e) => {
                e.target.style.display = 'none'; // Hide image if fails to load
              }}
            />
          ))}
        </div>

        {/* Background pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.57) 0%, rgba(118, 75, 162, 0.6) 100%)',
          zIndex: 1
        }}></div>

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Complete Gangasagar Yatra Services {new Date().getFullYear() || 2026}
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Travel Guide | Car Service | Hotel Booking | Veg Food | Boat Service
          </p>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
              {stats.map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.9rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-buttons">
            <a href="tel:+919933888397" className="btn" style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              fontSize: '1.1rem',
              padding: '12px 30px',
              margin: '0 10px 10px 0',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <FaPhone /> Call Now
            </a>
            <a
              href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20Gangasagar%20Yatra%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                backgroundColor: '#25d366',
                color: 'white',
                fontSize: '1.1rem',
                padding: '12px 30px',
                margin: '0 10px 10px 0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FaWhatsapp /> WhatsApp Booking
            </a>
          </div>

          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            🎯 100% Trusted Local Service | ⭐ 4.8/5 Customer Rating | ⏰ 24×7 Support
          </div>
        </div>

        <style jsx>{`
      @keyframes slideShow {
      0% { opacity: 0; }
      20% { opacity: 1; }
      33% { opacity: 1; }
      53% { opacity: 0; }
      100% { opacity: 0; }
    }
  `}</style>
      </section>

      {/* Why Gangasagar Section */}
      <section className="container p-2">
        <div className="text-center mb-3">
          <h2 className="section-title">Why Choose Gangasagar for Your Pilgrimage?</h2>
          <div className="mt-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem' }}>
              <strong>Gangasagar</strong>, located on <strong>Sagar Island</strong> in West Bengal, is where the holy river Ganga meets the Bay of Bengal. It's one of the most sacred pilgrimage sites in Hinduism, attracting millions of devotees annually.
            </p>
            <p className="mt-1" style={{ fontSize: '1.1rem' }}>
              The <strong>Kapil Muni Temple</strong> here is believed to be the place where Sage Kapil performed severe penance. Taking a holy dip at the confluence during <strong>Makar Sankranti (January 14/15)</strong> is considered highly auspicious and believed to wash away all sins.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" style={{ backgroundColor: '#f8f9fa', padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">Our Complete Gangasagar Services</h2>
          <p className="text-center mb-3" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need for a perfect Gangasagar pilgrimage in one place
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" style={{
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                height: '100%'
              }}>
                <div className="service-icon" style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  fontSize: '2rem',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  {service.icon}
                </div>
                <div className="service-content">
                  <h3 style={{ textAlign: 'center' }}>{service.title}</h3>
                  <p style={{ textAlign: 'center', color: '#666' }}>{service.description}</p>
                  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <a
                      href={service.link}
                      className="btn btn-primary"
                      style={{
                        backgroundColor: '#3498db',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                    >
                      {service.linkText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="container p-2">
        <h2 className="section-title">How Gangasagar Booking Works</h2>
        <p className="text-center mb-3" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Simple 4-step process for hassle-free Gangasagar pilgrimage booking
        </p>
        <div className="services-grid">
          {[
            {
              step: "1",
              title: "Choose Service",
              desc: "Select from travel guide, car, hotel, food, or boat service",
              icon: "🎯"
            },
            {
              step: "2",
              title: "Contact Us",
              desc: "Call +91 99338 88397 or WhatsApp +91 70296 75532",
              icon: "📞"
            },
            {
              step: "3",
              title: "Confirm Booking",
              desc: "Get instant confirmation with all details",
              icon: "✅"
            },
            {
              step: "4",
              title: "Enjoy Your Yatra",
              desc: "Experience seamless Gangasagar pilgrimage",
              icon: "🛕"
            }
          ].map((item, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#2ecc71' }}>
                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
              </div>
              <div className="service-content">
                <div style={{
                  backgroundColor: '#f8f9fa',
                  color: '#2ecc71',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {item.step}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container p-2 mt-3" style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px' }}>
        <h2 className="section-title">Why Choose Our Gangasagar Services</h2>
        <div className="services-grid">
          {[
            {
              icon: "🏠",
              title: "Local Trusted Service",
              desc: "Established local service providers with 10+ years experience in Sagar Island"
            },
            {
              icon: "💰",
              title: "Best Price Guarantee",
              desc: "Most affordable rates with no hidden charges. Starting from ₹500 only"
            },
            {
              icon: "🥗",
              title: "100% Hygienic Veg Food",
              desc: "Satvik vegetarian meals prepared in hygienic conditions, delivered to you"
            },
            {
              icon: "⏰",
              title: "24×7 Support",
              desc: "Round the clock customer support for all your Gangasagar needs"
            },
            {
              icon: "👨‍🏫",
              title: "Certified Guides",
              desc: "Government-certified local guides for Kapil Muni Temple"
            },
            {
              icon: "🛡️",
              title: "Safe & Secure",
              desc: "Licensed boats, insured vehicles, and verified accommodation"
            }
          ].map((item, index) => (
            <div key={index} className="service-card" style={{ border: '1px solid #eee' }}>
              <div className="service-icon" style={{ backgroundColor: '#e74c3c' }}>
                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
              </div>
              <div className="service-content">
                <h3>{item.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials with Schema */}
      <section className="testimonials" style={{ backgroundColor: '#f8f9fa', padding: '3rem 0' }}>
        <div className="container">
          <h2 className="section-title">What Our Gangasagar Pilgrims Say</h2>
          <p className="text-center mb-3" style={{ color: '#666' }}>
            Join 500+ satisfied pilgrims who experienced hassle-free Gangasagar yatra
          </p>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card" style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color: i < testimonial.rating ? '#f39c12' : '#ddd',
                        marginRight: '2px'
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{testimonial.text}"
                </p>
                <p className="testimonial-author" style={{ fontWeight: 'bold', color: '#3498db' }}>
                  - {testimonial.author}
                </p>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '20px',
                  fontSize: '3rem',
                  color: '#3498db',
                  opacity: 0.1
                }}>
                  "
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container p-2">
        <h2 className="section-title">Our Location in Gangasagar</h2>
        <p className="text-center mb-3" style={{ color: '#666' }}>
          Serving pilgrims across Sagar Island, West Bengal
        </p>
        <div className="map-container">
          <iframe
            title="Gangasagar Map - Kapil Muni Temple Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7416.831056452789!2d88.06622230051849!3d21.647687416027395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a030f5be9a42e1b%3A0x4dd9390cb55c68e2!2sKali%20Bazar%2C%20Gangasagar%2C%20West%20Bengal%20743373!5e0!3m2!1sen!2sin!4v1766674776010!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p>
              <strong>📍 Address:</strong> Kalibazar, Gangasagar, Sagar Island, South 24 Parganas, West Bengal - 743373
            </p>
            <p>
              <strong>📞 Contact:</strong> +91 99338 88397 | <strong>💬 WhatsApp:</strong> +91 70296 75532
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '3rem 0',
        marginTop: '2rem'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Ready for Your Spiritual Journey to Gangasagar?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Book your complete Gangasagar pilgrimage package today
          </p>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            display: 'inline-block'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f39c12' }}>
              +91 99338 88397
            </div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
              24×7 Gangasagar Booking Helpline
            </div>
          </div>

          <div className="cta-buttons">
            <a href="tel:+919933888397" className="btn" style={{
              backgroundColor: '#27ae60',
              color: 'white',
              fontSize: '1.1rem',
              padding: '12px 30px',
              margin: '0 10px 10px 0',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <FaPhone /> Call for Instant Booking
            </a>
            <a
              href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20complete%20Gangasagar%20Yatra%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                backgroundColor: '#25d366',
                color: 'white',
                fontSize: '1.1rem',
                padding: '12px 30px',
                margin: '0 10px 10px 0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FaWhatsapp /> WhatsApp Package Details
            </a>
          </div>

          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            🎁 Special Offer: Book 3+ services and get 10% discount!
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;