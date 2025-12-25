// // src/pages/BoatBooking.jsx
// import React from 'react';
// import { FaShip, FaShieldAlt, FaUsers, FaClock, FaMoneyBillWave, FaLifeRing } from 'react-icons/fa';

// const BoatBooking = () => {
//   const boatTypes = [
//     {
//       name: 'Small Boat',
//       capacity: '10-15 people',
//       price: '₹2000 per trip',
//       features: ['Quick service', 'Ideal for families', 'Licensed boatman']
//     },
//     {
//       name: 'Medium Boat',
//       capacity: '20-25 people',
//       price: '₹3500 per trip',
//       features: ['Group booking', 'Economical', 'Life jackets provided']
//     },
//     {
//       name: 'Large Boat',
//       capacity: '40-50 people',
//       price: '₹6000 per trip',
//       features: ['Big groups', 'Safe & stable', 'Experienced crew']
//     },
//     {
//       name: 'Private Boat',
//       capacity: '4-6 people',
//       price: '₹1500 per trip',
//       features: ['Exclusive use', 'Flexible timing', 'Personal service']
//     }
//   ];

//   const safetyFeatures = [
//     { icon: <FaShieldAlt />, feature: 'Licensed Boats', desc: 'Government approved vessels' },
//     { icon: <FaLifeRing />, feature: 'Life Jackets', desc: 'Available for all passengers' },
//     { icon: <FaUsers />, feature: 'Experienced Crew', desc: 'Trained boat operators' },
//     { icon: <FaClock />, feature: 'Weather Updates', desc: 'Safe crossing conditions' }
//   ];

//   const crossingPoints = [
//     { from: 'Kakdwip', to: 'Kachuberia', duration: '30-45 mins', frequency: 'Every hour' },
//     { from: 'Namkhana', to: 'Lot 8', duration: '45-60 mins', frequency: 'Every 2 hours' },
//     { from: 'Frazergunj', to: 'Sagar Island', duration: '60 mins', frequency: '3 times daily' }
//   ];

//   const bookingTips = [
//     'Book in advance during peak season',
//     'Arrive at jetty 30 minutes before departure',
//     'Carry minimum luggage for easy boarding',
//     'Follow crew instructions for safety'
//   ];

//   return (
//     <div className="container p-2">
//       <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
//         <h1>Boat Booking Service</h1>
//         <p>Safe & Licensed River Crossing to Sagar Island</p>
//       </div>

//       {/* Boat Types */}
//       <section>
//         <h2 className="section-title">Available Boats</h2>
//         <div className="services-grid">
//           {boatTypes.map((boat, index) => (
//             <div key={index} className="service-card">
//               <div className="service-icon" style={{ backgroundColor: '#2980b9' }}>
//                 <FaShip size={30} />
//               </div>
//               <div className="service-content">
//                 <h3>{boat.name}</h3>
//                 <p style={{ color: '#2980b9', fontWeight: 'bold' }}>{boat.capacity}</p>
//                 <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>{boat.price}</p>
//                 <div className="mt-1">
//                   {boat.features.map((feature, idx) => (
//                     <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
//                       <span style={{ color: '#27ae60', marginRight: '0.5rem' }}>✓</span>
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <button 
//                   className="btn btn-primary mt-2"
//                   onClick={() => {
//                     const message = `I want to book: ${boat.name} (${boat.capacity})`;
//                     window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
//                   }}
//                 >
//                   Book This Boat
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Safety Features */}
//       <section className="mt-3">
//         <h2 className="section-title">Safety First</h2>
//         <div className="services-grid">
//           {safetyFeatures.map((item, index) => (
//             <div key={index} className="service-card">
//               <div className="service-icon" style={{ backgroundColor: '#27ae60' }}>
//                 {item.icon}
//               </div>
//               <div className="service-content">
//                 <h3>{item.feature}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Crossing Points */}
//       <section className="mt-3">
//         <div className="service-card">
//           <div className="service-content">
//             <h2>Crossing Points & Schedule</h2>
//             <div className="mt-2">
//               <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                 <thead>
//                   <tr style={{ backgroundColor: '#f8f9fa' }}>
//                     <th style={{ padding: '1rem', textAlign: 'left' }}>From</th>
//                     <th style={{ padding: '1rem', textAlign: 'left' }}>To</th>
//                     <th style={{ padding: '1rem', textAlign: 'left' }}>Duration</th>
//                     <th style={{ padding: '1rem', textAlign: 'left' }}>Frequency</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {crossingPoints.map((point, index) => (
//                     <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
//                       <td style={{ padding: '1rem' }}>{point.from}</td>
//                       <td style={{ padding: '1rem' }}>{point.to}</td>
//                       <td style={{ padding: '1rem' }}>{point.duration}</td>
//                       <td style={{ padding: '1rem' }}>{point.frequency}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Timing Info */}
//       <section className="mt-3">
//         <div className="service-card">
//           <div className="service-content">
//             <h2>Timing Information</h2>
//             <div className="mt-2">
//               <h3>⏰ Regular Schedule:</h3>
//               <p>6:00 AM to 6:00 PM daily</p>
              
//               <h3 className="mt-2">🌅 Morning Departures:</h3>
//               <p>First boat: 6:00 AM (Ideal for early darshan)</p>
              
//               <h3 className="mt-2">🌇 Evening Returns:</h3>
//               <p>Last boat from Sagar Island: 5:30 PM</p>
              
//               <h3 className="mt-2">⚠️ Important:</h3>
//               <p>No night crossing due to safety regulations</p>
//               <p>Tide timings may affect schedule</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Booking Tips */}
//       <section className="mt-3">
//         <div className="service-card">
//           <div className="service-content">
//             <h2>Booking Tips & Guidelines</h2>
//             <div className="mt-2">
//               {bookingTips.map((tip, index) => (
//                 <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
//                   <div style={{
//                     backgroundColor: '#3498db',
//                     color: 'white',
//                     width: '24px',
//                     height: '24px',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginRight: '1rem',
//                     flexShrink: 0
//                   }}>
//                     {index + 1}
//                   </div>
//                   <p>{tip}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Price Details */}
//       <section className="mt-3">
//         <div className="service-card">
//           <div className="service-content">
//             <h2>Pricing Details</h2>
//             <div className="mt-2">
//               <h3>💰 Individual Tickets:</h3>
//               <p>₹150 per person (one way)</p>
//               <p>₹250 per person (return)</p>
              
//               <h3 className="mt-2">👨‍👩‍👧‍👦 Group Discounts:</h3>
//               <p>10+ people: 10% discount</p>
//               <p>20+ people: 15% discount</p>
              
//               <h3 className="mt-2">🚗 Vehicle Ferry:</h3>
//               <p>Car/Bike: Additional charges apply</p>
//               <p>Contact for vehicle booking rates</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <div className="text-center mt-3">
//         <h2>Book Your Boat Crossing</h2>
//         <p className="mt-1">Ensure your seat for a comfortable river crossing</p>
//         <div className="cta-buttons mt-2">
//           <a href="tel:+919933888397" className="btn btn-primary">
//             📞 Call for Boat Booking
//           </a>
//           <a 
//             href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20boat%20service%20for%20Ganga%20Sagar"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-success"
//           >
//             💬 WhatsApp Boat Details
//           </a>
//         </div>
//         <p className="mt-2" style={{ color: '#e74c3c', fontWeight: 'bold' }}>
//           ⚠️ Booking confirmation required 2 hours before departure
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BoatBooking;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaShip, FaShieldAlt, FaUsers, FaClock, FaMoneyBillWave, FaLifeRing, FaWater, FaWind, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';

const BoatBooking = () => {
  // Schema.org markup for Boat Service
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gangasagar Boat Booking Service - Sagar Island Ferry",
    "description": "Book safe licensed boats for Gangasagar crossing: Kakdwip to Kachuberia ferry. Small boats ₹2,000, large boats ₹6,000. 24×7 booking support.",
    "provider": {
      "@type": "Organization",
      "name": "Gangasagar Yatra Services"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Hugli River, West Bengal"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Boat Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Small Boat (10-15 people)"
          },
          "price": "2000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medium Boat (20-25 people)"
          },
          "price": "3500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Large Boat (40-50 people)"
          },
          "price": "6000",
          "priceCurrency": "INR"
        }
      ]
    }
  };

  const boatTypes = [
    {
      name: 'Small Boat - Family Package',
      capacity: '10-15 people',
      price: '₹2,000 per trip',
      perPerson: '₹150-200/person',
      features: ['Quick boarding', 'Ideal for families', 'Licensed boatman', 'Life jackets included', 'Direct crossing'],
      bestFor: 'Families, Small Groups',
      icon: '🛥️'
    },
    {
      name: 'Medium Boat - Group Package',
      capacity: '20-25 people',
      price: '₹3,500 per trip',
      perPerson: '₹150-175/person',
      features: ['Economical for groups', 'Spacious seating', 'Experienced crew', 'Safety equipment', 'Timely service'],
      bestFor: 'Tour Groups, Organizations',
      icon: '🚤'
    },
    {
      name: 'Large Boat - Tour Package',
      capacity: '40-50 people',
      price: '₹6,000 per trip',
      perPerson: '₹120-150/person',
      features: ['Most economical', 'Very stable', 'Multiple crew members', 'Covered seating', 'Priority boarding'],
      bestFor: 'Large Groups, Pilgrim Groups',
      icon: '⛴️'
    },
    {
      name: 'Private Boat - VIP Package',
      capacity: '4-6 people',
      price: '₹1,500 per trip',
      perPerson: '₹250-375/person',
      features: ['Exclusive use', 'Flexible timing', 'Personalized service', 'Priority departure', 'Luxury seating'],
      bestFor: 'VIP Guests, Special Needs',
      icon: '🚣'
    }
  ];

  const safetyFeatures = [
    { icon: <FaShieldAlt />, feature: 'Government Licensed', desc: 'All boats have valid licenses from WB Transport Dept.' },
    { icon: <FaLifeRing />, feature: 'Life Saving Equipment', desc: 'Life jackets, life buoys, and first aid kits on all boats' },
    { icon: <FaUsers />, feature: 'Experienced Crew', desc: '10+ years experienced local boat operators' },
    { icon: <FaWater />, feature: 'Weather Monitoring', desc: 'Real-time weather updates and safe crossing alerts' },
    { icon: <FaWind />, feature: 'Tide Schedule', desc: 'Crossing planned according to safe tide timings' },
    { icon: <FaShieldAlt />, feature: 'Insurance Covered', desc: 'Passenger insurance for all booked crossings' }
  ];

  const crossingPoints = [
    { 
      from: 'Kakdwip Main Ghat', 
      to: 'Kachuberia, Sagar Island', 
      duration: '30-45 mins', 
      distance: '8 km river crossing',
      frequency: 'Every 30-60 minutes',
      operating: '6:00 AM - 6:00 PM'
    },
    { 
      from: 'Namkhana Jetty', 
      to: 'Lot 8, Sagar Island', 
      duration: '45-60 mins', 
      distance: '12 km river crossing',
      frequency: 'Every 2 hours',
      operating: '7:00 AM - 5:00 PM'
    },
    { 
      from: 'Frazergunj', 
      to: 'Sagar Island (South)', 
      duration: '60-75 mins', 
      distance: '15 km river crossing',
      frequency: '3 times daily',
      operating: '8:00 AM, 12:00 PM, 4:00 PM'
    }
  ];

  const bookingTips = [
    'Book at least 24 hours in advance during peak season (Oct-Feb)',
    'Arrive at jetty 45 minutes before scheduled departure time',
    'Carry minimum luggage - boats have limited storage space',
    'Follow crew instructions strictly during boarding and crossing',
    'Keep children close and wear life jackets at all times',
    'Check weather updates before departure'
  ];

  const pricingDetails = {
    individual: [
      { type: 'Adult (One Way)', price: '₹150' },
      { type: 'Adult (Return)', price: '₹250' },
      { type: 'Child (5-12 years)', price: '₹100' },
      { type: 'Child (Return)', price: '₹150' }
    ],
    groupDiscounts: [
      { size: '10-15 people', discount: '10%', finalRate: '₹135/person' },
      { size: '16-25 people', discount: '15%', finalRate: '₹127/person' },
      { size: '26-50 people', discount: '20%', finalRate: '₹120/person' },
      { size: '51+ people', discount: '25%', finalRate: '₹112/person' }
    ],
    vehicleFerry: [
      { vehicle: 'Motorcycle', price: '₹300' },
      { vehicle: 'Car (Small)', price: '₹800' },
      { vehicle: 'Car (SUV)', price: '₹1,200' },
      { vehicle: 'Tempo Traveller', price: '₹2,000' }
    ]
  };

  return (
    <div className="container p-2">
      {/* SEO Head Section */}
      <Helmet>
        <title>Gangasagar Boat Booking | Sagar Island Ferry Service | ₹150/Person</title>
        <meta 
          name="description" 
          content="Book Gangasagar boat service: Kakdwip to Kachuberia ferry ₹150/person. Small boats ₹2,000, large boats ₹6,000. Safe licensed boats with life jackets." 
        />
        <meta 
          name="keywords" 
          content="Gangasagar boat booking, Sagar Island ferry, Kakdwip to Kachuberia boat, Gangasagar crossing, river crossing to Sagar Island, boat service Gangasagar, ferry booking West Bengal" 
        />
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>

      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Gangasagar Boat Booking - Sagar Island Ferry Service</h1>
        <p>Safe & Licensed River Crossing to Sagar Island | Kakdwip to Kachuberia Ferry</p>
        <div className="mt-2">
          <span style={{ 
            backgroundColor: '#2980b9', 
            color: 'white', 
            padding: '5px 15px', 
            borderRadius: '20px',
            marginRight: '10px'
          }}>
            ⛴️ Starting from ₹150/person
          </span>
          <span style={{ 
            backgroundColor: '#27ae60', 
            color: 'white', 
            padding: '5px 15px', 
            borderRadius: '20px' 
          }}>
            🛡️ 100% Safety Certified
          </span>
        </div>
      </div>

      {/* Boat Types */}
      <section>
        <h2 className="section-title">🛥️ Available Gangasagar Boats</h2>
        <div className="services-grid">
          {boatTypes.map((boat, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '3rem' }}>{boat.icon}</div>
                  <h3>{boat.name}</h3>
                  <div style={{ color: '#2980b9', fontWeight: 'bold' }}>
                    {boat.capacity}
                  </div>
                </div>
                
                <div style={{ margin: '1rem 0' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c' }}>
                    {boat.price}
                  </div>
                  <div style={{ color: '#666' }}>{boat.perPerson}</div>
                  <div style={{ color: '#27ae60' }}>Best for: {boat.bestFor}</div>
                </div>

                <div>
                  <h4>✅ Features:</h4>
                  {boat.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
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
                      const message = `I want to book: ${boat.name} (${boat.capacity})`;
                      window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Book {boat.name.split(' ')[0]} Boat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>💰 Detailed Gangasagar Boat Pricing</h2>
            <div className="mt-2">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                
                <div>
                  <h3>👤 Individual Tickets</h3>
                  <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
                    {pricingDetails.individual.map((item, index) => (
                      <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span>{item.type}:</span>
                        <span style={{ fontWeight: 'bold', color: '#e74c3c' }}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3>👥 Group Discounts</h3>
                  <div style={{ backgroundColor: '#e8f5e9', padding: '1rem', borderRadius: '8px' }}>
                    {pricingDetails.groupDiscounts.map((item, index) => (
                      <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span>{item.size}:</span>
                        <span style={{ fontWeight: 'bold', color: '#27ae60' }}>{item.discount} off</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3>🚗 Vehicle Ferry</h3>
                  <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '8px' }}>
                    {pricingDetails.vehicleFerry.map((item, index) => (
                      <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span>{item.vehicle}:</span>
                        <span style={{ fontWeight: 'bold', color: '#2980b9' }}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
              <div className="mt-2" style={{ backgroundColor: '#fff3cd', padding: '1rem', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
                <p><strong>📝 Important:</strong> All prices are for one-way crossing. Return tickets offer 15% discount. 50% advance required for group bookings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="mt-3">
        <h2 className="section-title">🛡️ Safety First - Our Guarantee</h2>
        <div className="services-grid">
          {safetyFeatures.map((item, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#27ae60' }}>
                {item.icon}
              </div>
              <div className="service-content">
                <h3>{item.feature}</h3>
                <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Crossing Points */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>📍 Gangasagar Crossing Points & Schedule</h2>
            <div className="mt-2" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#2980b9', color: 'white' }}>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Depart From</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Arrive At</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Duration</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Distance</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {crossingPoints.map((point, index) => (
                    <tr key={index} style={{ 
                      borderBottom: '1px solid #eee',
                      backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white'
                    }}>
                      <td style={{ padding: '12px', fontWeight: 'bold' }}>{point.from}</td>
                      <td style={{ padding: '12px', fontWeight: 'bold' }}>{point.to}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{point.duration}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{point.distance}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{point.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-2" style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '8px' }}>
              <p><strong>🚀 Main Route:</strong> <strong>Kakdwip → Kachuberia</strong> is the most popular and frequent route to Sagar Island.</p>
              <p><strong>🎯 Recommended:</strong> For first-time visitors, take the Kakdwip to Kachuberia route.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Information */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>⏰ Gangasagar Boat Timing Schedule</h2>
            <div className="mt-2">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                
                <div>
                  <h3>🌅 Morning Schedule</h3>
                  <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
                    <p><strong>First Departure:</strong> 6:00 AM (Kakdwip)</p>
                    <p><strong>Peak Hours:</strong> 7:00 AM - 10:00 AM</p>
                    <p><strong>Morning Frequency:</strong> Every 30 minutes</p>
                  </div>
                </div>

                <div>
                  <h3>🌇 Evening Schedule</h3>
                  <div style={{ backgroundColor: '#fff3cd', padding: '1rem', borderRadius: '8px' }}>
                    <p><strong>Last Departure to Island:</strong> 4:30 PM</p>
                    <p><strong>Last Return from Island:</strong> 5:30 PM</p>
                    <p><strong>Evening Frequency:</strong> Every 45-60 minutes</p>
                  </div>
                </div>

                <div>
                  <h3>⚠️ Important Notes</h3>
                  <div style={{ backgroundColor: '#ffebee', padding: '1rem', borderRadius: '8px' }}>
                    <p><strong>No Night Crossing:</strong> Due to safety regulations</p>
                    <p><strong>Tide Dependent:</strong> Schedule may change with tides</p>
                    <p><strong>Weather Updates:</strong> Check before departure</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="mt-3">
        <div className="service-card">
          <div className="service-content">
            <h2>📋 Essential Booking Tips & Guidelines</h2>
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
                    backgroundColor: '#2980b9',
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
                    {index === 0 && (
                      <p style={{ margin: '0.5rem 0 0 0', color: '#e74c3c', fontSize: '0.9rem' }}>
                        <strong>Peak Season:</strong> October to February, especially during Makar Sankranti
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
            <h2>📱 How to Book Gangasagar Boat Service</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#2980b9', 
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
                <div>Call/WhatsApp with details</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#2980b9', 
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
                <div style={{ fontWeight: 'bold' }}>Select Boat</div>
                <div>Choose based on group size</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  backgroundColor: '#2980b9', 
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
                  backgroundColor: '#2980b9', 
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
                <div style={{ fontWeight: 'bold' }}>Board Boat</div>
                <div>Arrive 45 mins before</div>
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
        <h2>🛥️ Book Your Gangasagar Boat Crossing Today</h2>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0', color: '#f39c12' }}>
          Starting from ₹150 per person
        </div>
        <p>Ensure a safe and comfortable river crossing to Sagar Island</p>
        
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn" style={{ 
            backgroundColor: '#27ae60', 
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.8rem 2rem',
            margin: '0.5rem'
          }}>
            📞 Call for Boat Booking
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20boat%20service%20for%20Gangasagar"
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
            💬 WhatsApp Boat Details
          </a>
          <button 
            className="btn"
            style={{ 
              backgroundColor: '#2980b9', 
              color: 'white',
              fontSize: '1.1rem',
              padding: '0.8rem 2rem',
              margin: '0.5rem'
            }}
            onClick={() => {
              const message = "I need boat booking information for Gangasagar:\n• Number of people: \n• Date: \n• Preferred time: ";
              window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            🎫 Get Booking Info
          </button>
        </div>
        
        <div className="mt-2" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          ⚠️ <strong>Important:</strong> Booking confirmation required 2 hours before departure
        </div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          ✅ Licensed Boats | ✅ Life Jackets | ✅ Experienced Crew | ✅ 24×7 Support
        </div>
      </div>
    </div>
  );
};

export default BoatBooking;