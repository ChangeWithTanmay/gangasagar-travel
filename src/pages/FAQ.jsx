// src/pages/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the best time to visit Gangasagar?",
      answer: "The best time is from October to February when the weather is pleasant. Avoid monsoon season due to difficult travel conditions."
    },
    {
      question: "Is food available at Gangasagar?",
      answer: "Yes, we provide 100% vegetarian and hygienic food services. You can book meals in advance through our service."
    },
    {
      question: "How to book services?",
      answer: "You can book services by calling us at +91 9933888397 or through WhatsApp booking. We recommend booking in advance during peak seasons."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash payments on-site. For advance bookings, we accept UPI, bank transfer, or cash deposit."
    },
    {
      question: "Is guide compulsory for visiting temples?",
      answer: "No, it's not compulsory but highly recommended to understand the historical and spiritual significance of the places."
    },
    {
      question: "Are there accommodation facilities?",
      answer: "Yes, we provide hotel and dharamshala booking services ranging from budget to comfortable stays."
    },
    {
      question: "How to reach Gangasagar?",
      answer: "First reach Kolkata, then take transport to Kakdwip, then ferry to Kachuberia, and finally road transport to Gangasagar."
    },
    {
      question: "Is it safe for solo women travelers?",
      answer: "Yes, we provide special assistance for solo women travelers including female guides and secure accommodation."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Gangasagar Yatra</p>
      </div>

      <div className="services-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="service-card">
            <div 
              className="service-content"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleFAQ(index)}
            >
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {faq.question}
                <span>{activeIndex === index ? '−' : '+'}</span>
              </h3>
              {activeIndex === index && (
                <div className="mt-1">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-3">
        <h2>Still have questions?</h2>
        <p className="mt-1">Contact us directly for personalized assistance</p>
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn btn-primary">
            📞 Call Now for Help
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20have%20a%20question%20about%20Ganga%20Sagar%20Yatra" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            💬 WhatsApp Your Question
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;