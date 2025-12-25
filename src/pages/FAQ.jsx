// // src/pages/FAQ.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Schema.org markup for FAQ page
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to visit Gangasagar for pilgrimage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time to visit Gangasagar is from October to February when the weather is pleasant (15-25°C). Winter months are ideal for pilgrimage. Avoid monsoon season (June-September) due to difficult travel conditions and limited boat services."
        }
      },
      {
        "@type": "Question",
        "name": "Is pure vegetarian food available at Gangasagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 100% satvik vegetarian and hygienic food services at Gangasagar. You can book complete meal packages in advance through our service, including breakfast, lunch, and dinner delivered to your accommodation."
        }
      },
      {
        "@type": "Question",
        "name": "How to book Gangasagar Yatra services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book all Gangasagar services by calling us at +91 9933888397 or through WhatsApp booking at +91 7029675532. We recommend booking at least 2-3 days in advance, and 1 month in advance during Makar Sankranti season."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept for Gangasagar booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept cash payments on-site at Gangasagar. For advance bookings, we accept UPI (Google Pay, PhonePe), bank transfer, or cash deposit. 50% advance payment is required to confirm bookings."
        }
      },
      {
        "@type": "Question",
        "name": "Is guide compulsory for visiting Kapil Muni Temple at Gangasagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, it's not compulsory but highly recommended to hire a local guide to understand the historical and spiritual significance of Kapil Muni Temple and Gangasagar. Guides help with temple rituals, timing, and local insights."
        }
      },
      {
        "@type": "Question",
        "name": "Are there good accommodation facilities at Sagar Island?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide hotel and dharamshala booking services at Gangasagar ranging from budget dharamshalas (₹500-1000/night) to comfortable hotels (₹1500-3000/night). All accommodations are near Kapil Muni Temple."
        }
      },
      {
        "@type": "Question",
        "name": "How to reach Gangasagar from Kolkata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From Kolkata: 1) Drive to Kakdwip (100 km, 3 hours) 2) Ferry to Kachuberia 3) Road to Gangasagar (15 km). We provide complete car and boat package from Kolkata to Gangasagar."
        }
      },
      {
        "@type": "Question",
        "name": "Is Gangasagar safe for solo women travelers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide special assistance for solo women travelers including female guides, secure accommodation, and dedicated support throughout the Gangasagar pilgrimage."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of Gangasagar tour packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gangasagar tour packages start from ₹2,500 for 1-day darshan to ₹6,000 for family packages. Prices include guide, transport, meals, and accommodation as per package details."
        }
      },
      {
        "@type": "Question",
        "name": "When is Gangasagar Mela and how crowded is it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gangasagar Mela happens on Makar Sankranti (January 14/15). It's India's 2nd largest pilgrimage gathering with 5-10 lakh devotees. Book services 1-2 months in advance for Mela season."
        }
      }
    ]
  };

  // Enhanced FAQ data with more questions
  const faqs = [
    {
      question: "What is the best time to visit Gangasagar for pilgrimage?",
      answer: "The best time to visit Gangasagar is from <strong>October to February</strong> when the weather is pleasant (15-25°C). Winter months are ideal for pilgrimage. Avoid monsoon season (June-September) due to difficult travel conditions and limited boat services.",
      category: "Travel Planning"
    },
    {
      question: "Is pure vegetarian food available at Gangasagar?",
      answer: "Yes, we provide <strong>100% satvik vegetarian</strong> and hygienic food services at Gangasagar. You can book complete meal packages in advance through our service, including breakfast, lunch, and dinner delivered to your accommodation.",
      category: "Food & Accommodation"
    },
    {
      question: "How to book Gangasagar Yatra services?",
      answer: "You can book all Gangasagar services by <strong>calling us at +91 9933888397</strong> or through <strong>WhatsApp booking at +91 7029675532</strong>. We recommend booking at least 2-3 days in advance, and 1 month in advance during Makar Sankranti season.",
      category: "Booking Process"
    },
    {
      question: "What payment methods do you accept for Gangasagar booking?",
      answer: "We accept cash payments on-site at Gangasagar. For advance bookings, we accept <strong>UPI (Google Pay, PhonePe), bank transfer, or cash deposit</strong>. 50% advance payment is required to confirm bookings.",
      category: "Payments"
    },
    {
      question: "Is guide compulsory for visiting Kapil Muni Temple at Gangasagar?",
      answer: "No, it's not compulsory but <strong>highly recommended</strong> to hire a local guide to understand the historical and spiritual significance of Kapil Muni Temple and Gangasagar. Guides help with temple rituals, timing, and local insights.",
      category: "Guide Services"
    },
    {
      question: "Are there good accommodation facilities at Sagar Island?",
      answer: "Yes, we provide hotel and dharamshala booking services at Gangasagar ranging from <strong>budget dharamshalas (₹500-1000/night) to comfortable hotels (₹1500-3000/night)</strong>. All accommodations are near Kapil Muni Temple.",
      category: "Food & Accommodation"
    },
    {
      question: "How to reach Gangasagar from Kolkata?",
      answer: "From Kolkata: <strong>1) Drive to Kakdwip (100 km, 3 hours) 2) Ferry to Kachuberia 3) Road to Gangasagar (15 km)</strong>. We provide complete car and boat package from Kolkata to Gangasagar.",
      category: "Travel Planning"
    },
    {
      question: "Is Gangasagar safe for solo women travelers?",
      answer: "Yes, we provide special assistance for solo women travelers including <strong>female guides, secure accommodation, and dedicated support</strong> throughout the Gangasagar pilgrimage.",
      category: "Safety"
    },
    {
      question: "What is the cost of Gangasagar tour packages?",
      answer: "Gangasagar tour packages start from <strong>₹2,500 for 1-day darshan to ₹6,000 for family packages</strong>. Prices include guide, transport, meals, and accommodation as per package details.",
      category: "Pricing"
    },
    {
      question: "When is Gangasagar Mela and how crowded is it?",
      answer: "Gangasagar Mela happens on <strong>Makar Sankranti (January 14/15)</strong>. It's India's <strong>2nd largest pilgrimage gathering</strong> with 5-10 lakh devotees. Book services 1-2 months in advance for Mela season.",
      category: "Events"
    },
    {
      question: "What documents are required for Gangasagar visit?",
      answer: "No special documents required for Indian citizens. Carry <strong>valid ID proof (Aadhar, Voter ID, Passport)</strong> for hotel check-in. Foreign nationals don't need special permits for Gangasagar.",
      category: "Travel Planning"
    },
    {
      question: "Is photography allowed at Kapil Muni Temple?",
      answer: "Yes, <strong>photography is allowed</strong> in most areas of Kapil Muni Temple. However, respect temple sanctity and avoid photography during prayer times or of specific rituals without permission.",
      category: "Temple Etiquette"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container p-2">
      {/* SEO Head Section with FAQ Schema */}
      <Helmet>
        <title>Gangasagar FAQ - All Your Questions Answered | Yatra Guide 2026</title>
        <meta 
          name="description" 
          content="Complete Gangasagar FAQ: Best time to visit, food, accommodation, booking process, safety, prices, and all your pilgrimage questions answered. Get expert advice." 
        />
        <meta 
          name="keywords" 
          content="Gangasagar FAQ, Gangasagar questions, Gangasagar travel tips, Gangasagar accommodation, Gangasagar food, Gangasagar booking process, Kapil Muni Temple guide, Sagar Island FAQ" 
        />
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>

      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Gangasagar FAQ - Complete Pilgrimage Questions Answered</h1>
        <p>Your Comprehensive Guide to Gangasagar Yatra - Everything You Need to Know</p>
      </div>

      {/* Quick Info Box */}
      <div className="service-card mb-3" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="service-content">
          <h2>📋 Quick Gangasagar Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <h4>⏰ Best Time</h4>
              <p>Oct-Feb (Avoid monsoon)</p>
            </div>
            <div>
              <h4>💰 Package Start</h4>
              <p>From ₹2,500 per person</p>
            </div>
            <div>
              <h4>📞 Contact</h4>
              <p>+91 99338 88397</p>
            </div>
            <div>
              <h4>🛳️ Distance from Kolkata</h4>
              <p>~100 km + ferry</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="mb-3">
        <h2>Browse Questions by Category</h2>
        <div className="cta-buttons">
          <button className="btn btn-secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            All Questions
          </button>
          <button className="btn btn-secondary" onClick={() => {
            const elem = document.querySelector('[data-category="Travel Planning"]');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}>
            🗺️ Travel Planning
          </button>
          <button className="btn btn-secondary" onClick={() => {
            const elem = document.querySelector('[data-category="Booking Process"]');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}>
            📅 Booking Process
          </button>
          <button className="btn btn-secondary" onClick={() => {
            const elem = document.querySelector('[data-category="Food & Accommodation"]');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}>
            🏨 Accommodation
          </button>
        </div>
      </div>

      {/* FAQ List */}
      <div className="services-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="service-card" data-category={faq.category}>
            <div 
              className="service-content"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleFAQ(index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ 
                    backgroundColor: '#3498db', 
                    color: 'white', 
                    padding: '2px 8px', 
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    marginRight: '0.5rem'
                  }}>
                    {faq.category}
                  </span>
                  <h3 style={{ marginTop: '0.5rem' }}>
                    {faq.question}
                  </h3>
                </div>
                <span style={{ 
                  fontSize: '1.5rem', 
                  color: '#3498db',
                  minWidth: '30px',
                  textAlign: 'center'
                }}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              
              {activeIndex === index && (
                <div className="mt-2" style={{ 
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  borderLeft: '4px solid #3498db'
                }}>
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  {(faq.question.includes("book") || faq.question.includes("payment")) && (
                    <div className="mt-2">
                      <button 
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          const message = `I have a question about: ${faq.question}`;
                          window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                        style={{ marginTop: '0.5rem' }}
                      >
                        💬 Ask More About This
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Common Concerns Section */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>🚨 Important Gangasagar Travel Tips</h2>
          <div className="mt-2">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h4>✅ What to Carry</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Light woolens in winter</li>
                  <li>Comfortable walking shoes</li>
                  <li>Personal medicines</li>
                  <li>ID proof for check-in</li>
                  <li>Plastic bags for wet clothes</li>
                </ul>
              </div>
              <div>
                <h4>❌ What to Avoid</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Non-vegetarian food</li>
                  <li>Alcohol/smoking near temple</li>
                  <li>Swimming in deep sea</li>
                  <li>Leaving valuables unattended</li>
                  <li>Last minute bookings in peak season</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className="service-card mt-3" style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeaa7' }}>
        <div className="service-content">
          <h2>🚑 Emergency & Support Contacts</h2>
          <div className="mt-2">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div>
                <h4>📞 Our 24×7 Support</h4>
                <p><strong>Main:</strong> +91 99338 88397</p>
                <p><strong>WhatsApp:</strong> +91 70296 75532</p>
                <p><strong>Email:</strong> contact@gangasagaryatra.com</p>
              </div>
              <div>
                <h4>🏥 Local Emergency</h4>
                <p><strong>Police:</strong> 100</p>
                <p><strong>Ambulance:</strong> 108</p>
                <p><strong>Fire:</strong> 101</p>
                <p><strong>Tourist Police:</strong> 1363</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-3" style={{ 
        backgroundColor: '#3498db', 
        color: 'white',
        padding: '2rem',
        borderRadius: '8px'
      }}>
        <h2>❓ Still Have Questions About Gangasagar?</h2>
        <p className="mt-1" style={{ fontSize: '1.1rem' }}>
          Get personalized assistance from our <strong>Gangasagar pilgrimage experts</strong>
        </p>
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn" style={{ 
            backgroundColor: 'white', 
            color: '#3498db',
            fontWeight: 'bold',
            margin: '0.5rem'
          }}>
            📞 Call Our Experts Now
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20need%20expert%20advice%20for%20Gangasagar%20Yatra%20planning" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
            style={{ margin: '0.5rem' }}
          >
            💬 Chat on WhatsApp
          </a>
          <button 
            className="btn"
            style={{ 
              backgroundColor: '#2ecc71', 
              color: 'white',
              margin: '0.5rem'
            }}
            onClick={() => {
              const subject = "Gangasagar Yatra Query";
              const body = "I have the following questions about Gangasagar pilgrimage:";
              window.location.href = `mailto:contact@gangasagaryatra.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}
          >
            📧 Email Your Questions
          </button>
        </div>
        <p className="mt-2" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
          ⏰ Response time: Within 30 minutes | Available 24×7
        </p>
      </div>

      {/* FAQ Search Suggestion */}
      <div className="text-center mt-3">
        <p>
          <strong>Searching for specific information?</strong> Try: 
          <span style={{ color: '#3498db', marginLeft: '0.5rem' }}>
            "Gangasagar hotel prices" • "Kapil Muni Temple timing" • "Sagar Island ferry schedule"
          </span>
        </p>
      </div>
    </div>
  );
};

export default FAQ;