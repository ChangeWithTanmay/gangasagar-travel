import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLanguage, FaCertificate, FaStar, FaHistory, FaPray, FaCamera, FaCar } from 'react-icons/fa';

const TravelGuide = () => {
  // Schema.org markup for Travel Guide Service
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gangasagar Travel Guide Service",
    "description": "Expert local guides for Kapil Muni Temple and Gangasagar pilgrimage. Complete temple history, rituals guidance, and sightseeing tours.",
    "provider": {
      "@type": "Organization",
      "name": "Gangasagar Yatra Services"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sagar Island, West Bengal"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Guide Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Guide Service",
            "description": "4-hour temple tour with history explanation"
          },
          "price": "500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Day Guide Package",
            "description": "8-hour complete Gangasagar tour including temple, beach and ashrams"
          },
          "price": "1000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Guide Package",
            "description": "Dedicated guide for family with custom itinerary"
          },
          "price": "1500",
          "priceCurrency": "INR"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "147"
    }
  };

  const guideProfiles = [
    {
      name: "Sri Ashok Mondal",
      experience: "15+ years",
      expertise: "Kapil Muni Temple History",
      languages: ["Bengali", "Hindi", "English"],
      specialties: ["Temple Rituals", "Historical Narratives", "Photography Guidance"],
      rating: 4.9
    },
    {
      name: "Sri Bimal Das",
      experience: "12+ years",
      expertise: "Gangasagar Mythology",
      languages: ["Bengali", "Hindi"],
      specialties: ["Mythological Stories", "Family Guidance", "Local Culture"],
      rating: 4.8
    },
    {
      name: "Smt. Anjali Roy",
      experience: "8+ years",
      expertise: "Women Pilgrim Assistance",
      languages: ["Bengali", "Hindi", "English"],
      specialties: ["Women's Rituals", "Safety Guidance", "Group Coordination"],
      rating: 4.9
    }
  ];

  const guidePackages = [
    {
      name: "Basic Temple Guide",
      duration: "4 Hours",
      price: "₹500",
      features: [
        "Kapil Muni Temple tour",
        "Basic history explanation",
        "Ritual timing assistance",
        "Temple photography spots"
      ],
      bestFor: "First-time visitors"
    },
    {
      name: "Full Day Gangasagar Tour",
      duration: "8 Hours",
      price: "₹1,000",
      features: [
        "Complete temple darshan",
        "Gangasagar beach visit",
        "Bharat Seva Ashram tour",
        "Local market guidance",
        "Lunch break coordination"
      ],
      bestFor: "Complete experience seekers"
    },
    {
      name: "Family Package",
      duration: "Full Day",
      price: "₹1,500",
      features: [
        "Dedicated family guide",
        "Customized itinerary",
        "Child-friendly explanations",
        "Family photography assistance",
        "Emergency support"
      ],
      bestFor: "Families with children/elders"
    },
    {
      name: "Group Package (10+ people)",
      duration: "Full Day",
      price: "₹3,000",
      features: [
        "Experienced group guide",
        "Wireless microphone system",
        "Group coordination",
        "Multiple language support",
        "Safety management"
      ],
      bestFor: "Tour groups, organizations"
    }
  ];

  const itinerary = [
    { time: "6:00 AM", activity: "Morning rituals at Kapil Muni Temple", duration: "1.5 hours" },
    { time: "7:30 AM", activity: "Holy dip at Gangasagar beach", duration: "1 hour" },
    { time: "8:30 AM", activity: "Breakfast & temple history session", duration: "1 hour" },
    { time: "9:30 AM", activity: "Detailed temple architecture tour", duration: "2 hours" },
    { time: "11:30 AM", activity: "Bharat Seva Ashram visit", duration: "1 hour" },
    { time: "12:30 PM", activity: "Lunch break & rest", duration: "1.5 hours" },
    { time: "2:00 PM", activity: "Local market & shopping guidance", duration: "1.5 hours" },
    { time: "3:30 PM", activity: "Evening rituals & photography session", duration: "1.5 hours" },
    { time: "5:00 PM", activity: "Departure & next day planning", duration: "1 hour" }
  ];

  return (
    <div className="container p-2">
      {/* SEO Head Section */}
      <Helmet>
        <title>Gangasagar Travel Guide Service | Expert Kapil Muni Temple Guides 2026</title>
        <meta
          name="description"
          content="Book certified Gangasagar travel guides from ₹500/day. Expert local guides for Kapil Muni Temple history, rituals, and complete Gangasagar pilgrimage guidance."
        />
        <meta
          name="keywords"
          content="Gangasagar travel guide, Kapil Muni Temple guide, Gangasagar tour guide, Sagar Island local guide, Gangasagar pilgrimage guide, Bengali speaking guide Gangasagar, certified travel guide Gangasagar"
        />
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>

      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Gangasagar Travel Guide Service - Certified Local Experts</h1>
        <p>Expert Guides for Kapil Muni Temple History, Rituals & Complete Gangasagar Pilgrimage</p>
        <div className="mt-2">
          <span style={{
            backgroundColor: '#27ae60',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px',
            marginRight: '10px'
          }}>
            ⭐ 4.8/5 Rating from 147+ Pilgrims
          </span>
          <span style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px'
          }}>
            📍 Local Sagar Island Guides
          </span>
        </div>
      </div>

      {/* Why Choose Our Guides */}
      <div className="service-card mb-3">
        <div className="service-content">
          <h2>🏆 Why Choose Our Gangasagar Travel Guides?</h2>
          <div className="services-grid mt-2">
            {[
              {
                icon: <FaCertificate />,
                title: "Certified Local Guides",
                desc: "Government-certified guides with deep knowledge of Kapil Muni Temple"
              },
              {
                icon: <FaHistory />,
                title: "15+ Years Experience",
                desc: "Expertise in Gangasagar history, mythology, and rituals"
              },
              {
                icon: <FaLanguage />,
                title: "Multi-Lingual Support",
                desc: "Fluent in Bengali, Hindi, English & other regional languages"
              },
              {
                icon: <FaPray />,
                title: "Ritual Specialists",
                desc: "Guidance for proper temple rituals and holy dip procedures"
              },
              {
                icon: <FaCamera />,
                title: "Photography Assistance",
                desc: "Best photo spots and timing for memorable pictures"
              },
              {
                icon: <FaCar />,
                title: "Transport Coordination",
                desc: "Seamless coordination with car and boat services"
              }
            ].map((item, index) => (
              <div key={index} className="service-card" style={{ border: '1px solid #eee' }}>
                <div className="service-icon" style={{ backgroundColor: '#3498db' }}>
                  {item.icon}
                </div>
                <div className="service-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Expert Guides */}
      <div className="mt-3">
        <h2 className="section-title">👥 Meet Our Expert Gangasagar Guides</h2>
        <div className="services-grid mt-2">
          {guideProfiles.map((guide, index) => (
            <div key={index} className="service-card" style={{ textAlign: 'center' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#3498db',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                margin: '0 auto 1rem'
              }}>
                {guide.name.charAt(0)}
              </div>
              <h3>{guide.name}</h3>
              <div style={{ color: '#27ae60', fontWeight: 'bold' }}>
                <FaStar /> {guide.rating} Rating
              </div>
              <div style={{ margin: '0.5rem 0' }}>
                <strong>Experience:</strong> {guide.experience}
              </div>
              <div style={{ margin: '0.5rem 0' }}>
                <strong>Expertise:</strong> {guide.expertise}
              </div>
              <div style={{ margin: '0.5rem 0' }}>
                <strong>Languages:</strong> {guide.languages.join(', ')}
              </div>
              <div style={{ margin: '0.5rem 0' }}>
                <strong>Specialties:</strong>
                <div>
                  {guide.specialties.map((spec, i) => (
                    <span key={i} style={{
                      backgroundColor: '#f8f9fa',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      margin: '2px',
                      display: 'inline-block',
                      fontSize: '0.8rem'
                    }}>
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="btn btn-primary mt-1"
                onClick={() => {
                  const message = `I want to book guide ${guide.name} for Gangasagar`;
                  window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Book {guide.name.split(' ')[1]}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Guide Packages */}
      <div className="mt-3">
        <h2 className="section-title">📦 Gangasagar Guide Packages & Pricing</h2>
        <div className="services-grid mt-2">
          {guidePackages.map((pkg, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <div style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '8px 8px 0 0',
                  margin: '-1rem -1rem 1rem -1rem'
                }}>
                  <h3 style={{ margin: 0 }}>{pkg.name}</h3>
                </div>
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e74c3c' }}>
                    {pkg.price}
                  </div>
                  <div style={{ color: '#3498db', fontWeight: 'bold' }}>
                    {pkg.duration}
                  </div>
                  <div style={{ color: '#27ae60' }}>
                    Best for: {pkg.bestFor}
                  </div>
                </div>
                <div>
                  <h4>✅ Package Includes:</h4>
                  {pkg.features.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#27ae60', marginRight: '0.5rem' }}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2">
                  <button
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    onClick={() => {
                      const message = `I want to book: ${pkg.name} (${pkg.price})`;
                      window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Book {pkg.name.split(' ')[0]} Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Itinerary */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>🗓️ Sample Full-Day Gangasagar Guide Itinerary</h2>
          <div className="mt-2">
            {itinerary.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                marginBottom: '1rem',
                paddingBottom: '1rem',
                borderBottom: index < itinerary.length - 1 ? '1px solid #eee' : 'none',
                alignItems: 'center'
              }}>
                <div style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  minWidth: '100px',
                  textAlign: 'center',
                  marginRight: '1rem'
                }}>
                  {item.time}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold' }}>{item.activity}</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Duration: {item.duration}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2">
            <strong>Note:</strong> Itinerary can be customized based on your needs, time constraints, and special requirements.
          </p>
        </div>
      </div>

      {/* Languages Section */}
<div className="service-card mt-3">
  <div className="service-content">
    <h2>🗣️ Language Support for International Pilgrims</h2>
    <div className="mt-2">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>🇮🇳</div>
          <div style={{ fontWeight: 'bold' }}>Bengali & Hindi</div>
          <div>All our local guides</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>🇬🇧</div>
          <div style={{ fontWeight: 'bold' }}>English</div>
          <div>10+ guides available</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>🇮🇳</div>
          <div style={{ fontWeight: 'bold' }}>Tamil & Telugu</div>
          <div>Available on request</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>🌍</div>
          <div style={{ fontWeight: 'bold' }}>Other Languages</div>
          <div>Contact for availability</div>
        </div>
      </div>
    </div>
  </div>
</div>

          

  {/* Booking Process */ }
  < div className="service-card mt-3" >
    <div className="service-content">
      <h2>📋 How to Book Your Gangasagar Guide</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            backgroundColor: '#3498db',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 0.5rem',
            fontWeight: 'bold'
          }}>
            1
          </div>
          <div style={{ fontWeight: 'bold' }}>Call/WhatsApp Us</div>
          <div>Contact with your requirements</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            backgroundColor: '#3498db',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 0.5rem',
            fontWeight: 'bold'
          }}>
            2
          </div>
          <div style={{ fontWeight: 'bold' }}>Select Guide</div>
          <div>Choose based on language & expertise</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            backgroundColor: '#3498db',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 0.5rem',
            fontWeight: 'bold'
          }}>
            3
          </div>
          <div style={{ fontWeight: 'bold' }}>Confirm Booking</div>
          <div>50% advance payment</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            backgroundColor: '#3498db',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 0.5rem',
            fontWeight: 'bold'
          }}>
            4
          </div>
          <div style={{ fontWeight: 'bold' }}>Meet Your Guide</div>
          <div>At agreed location & time</div>
        </div>
      </div>
    </div>
  </div >

  {/* CTA Section */ }
  < div className="text-center mt-3" style={{
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '2rem',
    borderRadius: '8px'
  }}>
    <h2>👨‍🏫 Book Your Expert Gangasagar Guide Today</h2>
    <div style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
      Starting from <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹500</span> per day
    </div>
    <p>Ensure a meaningful and knowledgeable Gangasagar pilgrimage experience</p>

    <div className="cta-buttons mt-2">
      <a href="tel:+919933888397" className="btn" style={{
        backgroundColor: '#27ae60',
        color: 'white',
        fontSize: '1.1rem',
        padding: '0.8rem 2rem',
        margin: '0.5rem'
      }}>
        📞 Call to Book Guide
      </a>
      <a
        href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20a%20Gangasagar%20travel%20guide"
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
        💬 WhatsApp for Guide Details
      </a>
    </div>

    <div className="mt-2" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
      ✅ Certified Guides | ✅ 24×7 Booking Support | ✅ Customizable Itineraries
    </div>
  </div >
    </div >
  );
};

export default TravelGuide;