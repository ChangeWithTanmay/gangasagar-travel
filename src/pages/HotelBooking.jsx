// // src/pages/HotelBooking.jsx
// import React, { useState } from 'react';
// import { FaHotel, FaHome, FaMoneyBillWave, FaShower, FaWifi, FaParking, FaUtensils, FaSnowflake } from 'react-icons/fa';

// const HotelBooking = () => {
//   const [selectedType, setSelectedType] = useState('budget');
  
//   const hotelTypes = [
//     {
//       id: 'budget',
//       name: 'Budget Hotels',
//       price: '₹800-₹1200',
//       features: ['AC Room', 'Attached Bathroom', '24hr Hot Water', 'TV'],
//       description: 'Basic comfortable rooms near temple area'
//     },
//     {
//       id: 'dharamshala',
//       name: 'Dharamshala',
//       price: '₹300-₹500',
//       features: ['Shared Bathroom', 'Clean Beds', 'Secure Lockers', 'Common Hall'],
//       description: 'Simple accommodation for spiritual seekers'
//     },
//     {
//       id: 'family',
//       name: 'Family Stay',
//       price: '₹1500-₹2500',
//       features: ['Family Room', 'Private Bath', 'Hot Water', 'Room Service', 'Food Option'],
//       description: 'Spacious rooms suitable for families'
//     },
//     {
//       id: 'premium',
//       name: 'Premium Stay',
//       price: '₹2500-₹4000',
//       features: ['AC Room', 'Private Balcony', '24hr Room Service', 'WiFi', 'Food Included'],
//       description: 'Comfortable stay with all amenities'
//     }
//   ];

//   const areas = [
//     { name: 'Near Kapil Muni Temple', distance: '5 mins walk', type: 'Temple Proximity' },
//     { name: 'Gangasagar Beach Area', distance: '10 mins walk', type: 'Sea View' },
//     { name: 'Main Market Area', distance: '15 mins walk', type: 'Shopping Convenience' },
//     { name: 'Quiet Zone Area', distance: '20 mins walk', type: 'Peaceful Stay' }
//   ];

//   const facilities = [
//     { icon: <FaShower />, name: 'Hot Water 24×7', desc: 'Available in all rooms' },
//     { icon: <FaWifi />, name: 'Free WiFi', desc: 'In premium hotels only' },
//     { icon: <FaParking />, name: 'Car Parking', desc: 'Secure parking available' },
//     { icon: <FaUtensils />, name: 'Food Service', desc: 'On request or included' },
//     { icon: <FaSnowflake />, name: 'AC Rooms', desc: 'Available in budget+ categories' },
//     { icon: <FaMoneyBillWave />, name: 'Safe Deposit', desc: 'For valuables security' }
//   ];

//   return (
//     <div className="container p-2">
//       <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
//         <h1>Hotel & Accommodation Booking</h1>
//         <p>Comfortable stays for your spiritual journey</p>
//       </div>

//       {/* Hotel Types */}
//       <section>
//         <h2 className="section-title">Types of Accommodation</h2>
//         <div className="cta-buttons mb-3">
//           {hotelTypes.map(type => (
//             <button
//               key={type.id}
//               className={`btn ${selectedType === type.id ? 'btn-primary' : 'btn-secondary'}`}
//               onClick={() => setSelectedType(type.id)}
//             >
//               {type.name}
//             </button>
//           ))}
//         </div>

//         {/* Selected Hotel Details */}
//         <div className="service-card mb-3">
//           <div className="service-content">
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <h2>{hotelTypes.find(t => t.id === selectedType)?.name}</h2>
//               <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c' }}>
//                 {hotelTypes.find(t => t.id === selectedType)?.price}/night
//               </span>
//             </div>
//             <p className="mt-1">{hotelTypes.find(t => t.id === selectedType)?.description}</p>
            
//             <div className="mt-2">
//               <h3>Features:</h3>
//               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
//                 {hotelTypes.find(t => t.id === selectedType)?.features.map((feature, index) => (
//                   <span 
//                     key={index}
//                     style={{
//                       backgroundColor: '#f8f9fa',
//                       padding: '0.5rem 1rem',
//                       borderRadius: '20px',
//                       border: '1px solid #ddd'
//                     }}
//                   >
//                     ✓ {feature}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Available Areas */}
//       <section className="mt-3">
//         <h2 className="section-title">Available Locations</h2>
//         <div className="services-grid">
//           {areas.map((area, index) => (
//             <div key={index} className="service-card">
//               <div className="service-icon" style={{ backgroundColor: '#3498db' }}>
//                 <FaHome size={24} />
//               </div>
//               <div className="service-content">
//                 <h3>{area.name}</h3>
//                 <p style={{ color: '#27ae60', fontWeight: 'bold' }}>{area.distance}</p>
//                 <p>{area.type}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Facilities */}
//       <section className="mt-3">
//         <h2 className="section-title">Available Facilities</h2>
//         <div className="services-grid">
//           {facilities.map((facility, index) => (
//             <div key={index} className="service-card">
//               <div className="service-icon" style={{ backgroundColor: '#9b59b6' }}>
//                 {facility.icon}
//               </div>
//               <div className="service-content">
//                 <h3>{facility.name}</h3>
//                 <p>{facility.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Booking Process */}
//       <section className="mt-3">
//         <div className="service-card">
//           <div className="service-content">
//             <h2>Booking Process</h2>
//             <div className="mt-2">
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
//                 <div style={{
//                   backgroundColor: '#3498db',
//                   color: 'white',
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginRight: '1rem'
//                 }}>
//                   1
//                 </div>
//                 <div>
//                   <h3>Contact Us</h3>
//                   <p>Call or WhatsApp with your requirements</p>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
//                 <div style={{
//                   backgroundColor: '#3498db',
//                   color: 'white',
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginRight: '1rem'
//                 }}>
//                   2
//                 </div>
//                 <div>
//                   <h3>Check Availability</h3>
//                   <p>We check and confirm room availability</p>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
//                 <div style={{
//                   backgroundColor: '#3498db',
//                   color: 'white',
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginRight: '1rem'
//                 }}>
//                   3
//                 </div>
//                 <div>
//                   <h3>Payment & Confirmation</h3>
//                   <p>Advance payment to confirm booking</p>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <div style={{
//                   backgroundColor: '#3498db',
//                   color: 'white',
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginRight: '1rem'
//                 }}>
//                   4
//                 </div>
//                 <div>
//                   <h3>Check-in Details</h3>
//                   <p>Receive hotel details and check-in instructions</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <div className="text-center mt-3">
//         <h2>Book Your Stay Now</h2>
//         <p className="mt-1">Limited rooms available, especially during peak season</p>
//         <div className="cta-buttons mt-2">
//           <a href="tel:+919933888397" className="btn btn-primary">
//             📞 Call for Hotel Booking
//           </a>
//           <a 
//             href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20hotel%20in%20Ganga%20Sagar"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-success"
//           >
//             💬 WhatsApp Hotel Details
//           </a>
//         </div>
//         <p className="mt-2" style={{ color: '#666', fontSize: '0.9rem' }}>
//           *Advance booking recommended during Gangasagar Mela (Jan 14-15)
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HotelBooking;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHotel, FaHome, FaMoneyBillWave, FaShower, FaWifi, FaParking, FaUtensils, FaSnowflake, FaKey, FaMapMarkerAlt, FaUsers, FaStar } from 'react-icons/fa';

const HotelBooking = () => {
  const [selectedType, setSelectedType] = useState('budget');
  
  // Schema.org markup for Accommodation
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Gangasagar Hotel Booking Service",
    "description": "Book hotels and dharamshalas near Kapil Muni Temple. Budget rooms ₹800, family stays ₹1500, premium accommodation ₹2500. Temple proximity guaranteed.",
    "provider": {
      "@type": "Organization",
      "name": "Gangasagar Yatra Services"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sagar Island",
      "addressRegion": "West Bengal",
      "addressCountry": "India"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Hotel",
          "name": "Budget Hotels near Kapil Muni Temple"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "800",
          "maxPrice": "1200",
          "priceCurrency": "INR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Hotel",
          "name": "Dharamshala Accommodation"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "300",
          "maxPrice": "500",
          "priceCurrency": "INR"
        }
      }
    ]
  };

  const hotelTypes = [
    {
      id: 'budget',
      name: 'Budget Hotels',
      price: '₹800 - ₹1,200',
      minPrice: 800,
      maxPrice: 1200,
      features: ['AC Room Available', 'Attached Bathroom', '24hr Hot Water', 'LED TV', 'Room Service'],
      description: 'Basic comfortable rooms within 5-10 minutes walk from Kapil Muni Temple',
      bestFor: 'Solo Travelers, Budget Pilgrims',
      rating: '3.8/5',
      icon: '🏨'
    },
    {
      id: 'dharamshala',
      name: 'Dharamshala (Ashram Stay)',
      price: '₹300 - ₹500',
      minPrice: 300,
      maxPrice: 500,
      features: ['Clean Shared Bathrooms', 'Comfortable Beds', 'Secure Lockers', 'Common Prayer Hall', 'Spiritual Environment'],
      description: 'Simple spiritual accommodation ideal for pilgrims seeking authentic experience',
      bestFor: 'Spiritual Seekers, Group Pilgrims',
      rating: '4.0/5',
      icon: '🕌'
    },
    {
      id: 'family',
      name: 'Family Stay',
      price: '₹1,500 - ₹2,500',
      minPrice: 1500,
      maxPrice: 2500,
      features: ['Spacious Family Room', 'Private Attached Bath', '24hr Hot Water', 'Room Service', 'Food Options Available'],
      description: 'Spacious rooms suitable for families with children, near temple area',
      bestFor: 'Families, Elderly Pilgrims',
      rating: '4.2/5',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 'premium',
      name: 'Premium Stay',
      price: '₹2,500 - ₹4,000',
      minPrice: 2500,
      maxPrice: 4000,
      features: ['AC Room Standard', 'Private Balcony/View', '24hr Room Service', 'Free WiFi', 'Food Included', 'Daily Cleaning'],
      description: 'Comfortable premium accommodation with all modern amenities',
      bestFor: 'Comfort Seekers, Special Occasions',
      rating: '4.5/5',
      icon: '⭐'
    }
  ];

  const areas = [
    { 
      name: 'Near Kapil Muni Temple', 
      distance: '5 mins walk', 
      type: 'Temple Proximity',
      hotels: '15+ hotels & dharamshalas',
      advantage: 'Easiest temple access'
    },
    { 
      name: 'Gangasagar Beach Area', 
      distance: '10 mins walk', 
      type: 'Sea View Available',
      hotels: '8+ hotels',
      advantage: 'Beach proximity, scenic views'
    },
    { 
      name: 'Main Market Area', 
      distance: '15 mins walk', 
      type: 'Shopping & Food Convenience',
      hotels: '12+ hotels',
      advantage: 'All facilities nearby'
    },
    { 
      name: 'Quiet Zone Area', 
      distance: '20 mins walk', 
      type: 'Peaceful & Serene',
      hotels: '6+ hotels',
      advantage: 'Quiet environment for rest'
    }
  ];

  const facilities = [
    { icon: <FaShower />, name: '24×7 Hot Water', desc: 'Available in all paid accommodations', available: 'All Hotels' },
    { icon: <FaWifi />, name: 'Free WiFi', desc: 'High-speed internet access', available: 'Premium Hotels Only' },
    { icon: <FaParking />, name: 'Car Parking', desc: 'Secure parking facility', available: 'Most Hotels' },
    { icon: <FaUtensils />, name: 'Food Service', desc: 'Veg food available on request', available: 'Family & Premium' },
    { icon: <FaSnowflake />, name: 'AC Rooms', desc: 'Air conditioned comfort', available: 'Budget+ Categories' },
    { icon: <FaKey />, name: 'Safe Deposit', desc: 'Secure lockers for valuables', available: 'All Hotels' },
    { icon: <FaMoneyBillWave />, name: 'Flexible Payment', desc: 'UPI, Cash, Card accepted', available: 'All Bookings' },
    { icon: <FaUsers />, name: '24×7 Reception', desc: 'Round the clock support', available: 'Premium Hotels' }
  ];

  const bookingTips = [
    'Book at least 7 days in advance for regular dates',
    'For Gangasagar Mela (Jan), book 1-2 months in advance',
    'Carry valid ID proof (Aadhar, Passport) for check-in',
    'Check-in time: 12:00 PM, Check-out: 10:00 AM',
    'Early check-in/late check-out available with charges'
  ];

  return (
    <div className="container p-2">
      {/* SEO Head Section */}
      <Helmet>
        <title>Gangasagar Hotel Booking | Hotels near Kapil Muni Temple | ₹300-₹4000</title>
        <meta 
          name="description" 
          content="Book Gangasagar hotels & dharamshalas: Budget rooms ₹800, family stays ₹1500, premium ₹2500. 5-min walk to Kapil Muni Temple. 24×7 booking support." 
        />
        <meta 
          name="keywords" 
          content="Gangasagar hotel booking, hotels near Kapil Muni Temple, Sagar Island accommodation, Gangasagar dharamshala, budget hotels Gangasagar, family stay Sagar Island, Gangasagar ashram stay" 
        />
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>

      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Gangasagar Hotel Booking - Accommodation near Kapil Muni Temple</h1>
        <p>Comfortable Stays for Your Spiritual Journey | Temple Proximity Guaranteed</p>
        <div className="mt-2">
          <span style={{ 
            backgroundColor: '#9b59b6', 
            color: 'white', 
            padding: '5px 15px', 
            borderRadius: '20px',
            marginRight: '10px'
          }}>
            🏨 Starting from ₹300/night
          </span>
          <span style={{ 
            backgroundColor: '#27ae60', 
            color: 'white', 
            padding: '5px 15px', 
            borderRadius: '20px' 
          }}>
            📍 5-min walk to Temple
          </span>
        </div>
      </div>

      {/* Hotel Types */}
      <section>
        <h2 className="section-title">🏨 Gangasagar Accommodation Types</h2>
        <div className="cta-buttons mb-3">
          {hotelTypes.map(type => (
            <button
              key={type.id}
              className={`btn ${selectedType === type.id ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedType(type.id)}
              style={{ margin: '0.2rem' }}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Selected Hotel Details */}
        <div className="service-card mb-3">
          <div className="service-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '2.5rem' }}>{hotelTypes.find(t => t.id === selectedType)?.icon}</div>
                  <div>
                    <h2>{hotelTypes.find(t => t.id === selectedType)?.name}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaStar style={{ color: '#f39c12' }} />
                      <span>{hotelTypes.find(t => t.id === selectedType)?.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-1" style={{ fontSize: '1.1rem' }}>
                  {hotelTypes.find(t => t.id === selectedType)?.description}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e74c3c' }}>
                  {hotelTypes.find(t => t.id === selectedType)?.price}
                </div>
                <div style={{ color: '#666' }}>per night</div>
                <div style={{ color: '#27ae60', marginTop: '0.5rem' }}>
                  Best for: {hotelTypes.find(t => t.id === selectedType)?.bestFor}
                </div>
              </div>
            </div>
            
            <div className="mt-3">
              <h3>✅ Room Features:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                {hotelTypes.find(t => t.id === selectedType)?.features.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#27ae60', marginRight: '0.5rem' }}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const selected = hotelTypes.find(t => t.id === selectedType);
                  const message = `I want to book: ${selected?.name} (${selected?.price}/night)`;
                  window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                }}
                style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}
              >
                📅 Book {hotelTypes.find(t => t.id === selectedType)?.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Areas */}
      <section className="mt-3">
        <h2 className="section-title">📍 Gangasagar Hotel Locations</h2>
        <div className="services-grid">
          {areas.map((area, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#3498db' }}>
                <FaMapMarkerAlt size={24} />
              </div>
              <div className="service-content">
                <h3>{area.name}</h3>
                <div style={{ margin: '0.5rem 0' }}>
                  <div style={{ color: '#27ae60', fontWeight: 'bold' }}>
                    {area.distance} to Kapil Muni Temple
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>
                    {area.hotels}
                  </div>
                </div>
                <div style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: '0.5rem', 
                  borderRadius: '6px',
                  marginTop: '0.5rem'
                }}>
                  <div style={{ fontWeight: 'bold' }}>{area.type}</div>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>{area.advantage}</div>
                </div>
                <button 
                  className="btn btn-primary mt-1"
                  onClick={() => {
                    const message = `I want hotel in: ${area.name} area`;
                    window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Find Hotels Here
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="mt-3">
        <h2 className="section-title">🏆 Available Facilities & Amenities</h2>
        <div className="services-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#9b59b6' }}>
                {facility.icon}
              </div>
              <div className="service-content">
                <h3>{facility.name}</h3>
                <p style={{ fontSize: '0.9rem' }}>{facility.desc}</p>
                <div style={{ 
                  backgroundColor: '#e8f5e9', 
                  padding: '2px 8px', 
                  borderRadius: '12px',
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  marginTop: '0.5rem'
                }}>
                  {facility.available}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>💰 Gangasagar Hotel Price Comparison</h2>
            <div className="mt-2" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#9b59b6', color: 'white' }}>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Accommodation Type</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Price Range</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Best For</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Walk to Temple</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {hotelTypes.map((hotel, index) => (
                    <tr key={index} style={{ 
                      borderBottom: '1px solid #eee',
                      backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white'
                    }}>
                      <td style={{ padding: '12px', fontWeight: 'bold' }}>{hotel.name}</td>
                      <td style={{ padding: '12px', textAlign: 'center', color: '#e74c3c', fontWeight: 'bold' }}>
                        {hotel.price}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{hotel.bestFor}</td>
                      <td style={{ padding: '12px', textAlign: 'center', color: '#27ae60' }}>5-20 mins</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                          <FaStar style={{ color: '#f39c12' }} />
                          <span>{hotel.rating}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-2" style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
              <p><strong>🎁 Special Offer:</strong> Book hotel + guide + car together and get 15% discount on total package!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>📋 Essential Booking Tips for Gangasagar</h2>
            <div className="mt-2">
              {bookingTips.map((tip, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '1rem',
                  padding: '1rem',
                  backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    backgroundColor: '#9b59b6',
                    color: 'white',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0,
                    fontWeight: 'bold'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <p style={{ margin: 0 }}>{tip}</p>
                    {index === 1 && (
                      <p style={{ margin: '0.5rem 0 0 0', color: '#e74c3c', fontSize: '0.9rem' }}>
                        <strong>Gangasagar Mela:</strong> January 14-15 attracts millions, book EXTRA early!
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>📱 How to Book Gangasagar Accommodation</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#9b59b6', 
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
                <div style={{ fontWeight: 'bold' }}>Contact Us</div>
                <div>Call/WhatsApp with dates & requirements</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#9b59b6', 
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
                <div style={{ fontWeight: 'bold' }}>Check Options</div>
                <div>We share available hotels with photos</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#9b59b6', 
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
                <div>50% advance via UPI/Bank/Card</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#9b59b6', 
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
                <div style={{ fontWeight: 'bold' }}>Check-in</div>
                <div>Hotel details & check-in instructions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center mt-3" style={{ 
        backgroundColor: '#2c3e50', 
        color: 'white',
        padding: '2rem',
        borderRadius: '8px'
      }}>
        <h2>🏨 Book Your Gangasagar Accommodation Today</h2>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0', color: '#f39c12' }}>
          Starting from ₹300 per night
        </div>
        <p>Secure your comfortable stay near Kapil Muni Temple</p>
        
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn" style={{ 
            backgroundColor: '#27ae60', 
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.8rem 2rem',
            margin: '0.5rem'
          }}>
            📞 Call for Hotel Booking
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20hotel%20in%20Gangasagar"
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
            💬 WhatsApp Hotel Details
          </a>
          <button 
            className="btn"
            style={{ 
              backgroundColor: '#9b59b6', 
              color: 'white',
              fontSize: '1.1rem',
              padding: '0.8rem 2rem',
              margin: '0.5rem'
            }}
            onClick={() => {
              const message = "I need hotel information for Gangasagar:\n• Check-in date: \n• Check-out date: \n• Number of people: \n• Budget range: ";
              window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            🏨 Get Hotel Options
          </button>
        </div>
        
        <div className="mt-2" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          ⚠️ <strong>Important:</strong> Limited rooms during peak season. Book early to avoid disappointment.
        </div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          ✅ Temple Proximity | ✅ 24×7 Support | ✅ Verified Hotels | ✅ Flexible Cancellation
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;