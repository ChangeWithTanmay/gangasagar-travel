import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCar, FaGasPump, FaUser, FaMapMarkerAlt, FaShieldAlt, FaRupeeSign, FaClock, FaRoad } from 'react-icons/fa';

const CarBooking = () => {
  // Schema.org markup for Car Rental Service
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    "name": "Gangasagar Car Service - Sagar Island Taxi Booking",
    "description": "Book cars for Gangasagar pilgrimage: Swift Dzire, Innova, Scorpio, Tempo Traveller. Pickup from Kachuberia, Kapil Muni Temple, and all Sagar Island locations.",
    "provider": {
      "@type": "Organization",
      "name": "Gangasagar Yatra Services"
    },
    "availableVehicle": [
      {
        "@type": "Car",
        "name": "Maruti Suzuki Swift Dzire",
        "vehicleSeatingCapacity": "4",
        "fuelType": "Diesel/Petrol"
      },
      {
        "@type": "Car",
        "name": "Toyota Innova Crysta",
        "vehicleSeatingCapacity": "7",
        "fuelType": "Diesel"
      },
      {
        "@type": "Car",
        "name": "Mahindra Scorpio",
        "vehicleSeatingCapacity": "7",
        "fuelType": "Diesel"
      },
      {
        "@type": "Vehicle",
        "name": "Tempo Traveller",
        "vehicleSeatingCapacity": "12",
        "fuelType": "Diesel"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Sagar Island, West Bengal"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Rental Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Swift Dzire - 4 Hours",
            "description": "Compact sedan for 4 passengers"
          },
          "price": "800",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toyota Innova - Full Day",
            "description": "SUV for 7 passengers with AC"
          },
          "price": "2000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tempo Traveller - 8 Hours",
            "description": "Large vehicle for 12 passengers"
          },
          "price": "3500",
          "priceCurrency": "INR"
        }
      ]
    }
  };

  const vehicles = [
    {
      name: "Maruti Suzuki Swift Dzire",
      seats: "4+1",
      type: "Sedan",
      features: ["AC", "Music System", "Comfort Seats", "Spacious Boot"],
      price: "₹800 - ₹1,200",
      duration: "4-8 hours",
      bestFor: "Couples, Small Families",
      image: "🚗"
    },
    {
      name: "Toyota Innova Crysta",
      seats: "7+1",
      type: "SUV",
      features: ["Premium AC", "Leather Seats", "Extra Comfort", "Large Space"],
      price: "₹1,800 - ₹2,500",
      duration: "Full Day",
      bestFor: "Medium Families, Groups",
      image: "🚙"
    },
    {
      name: "Mahindra Scorpio",
      seats: "7+1",
      type: "SUV",
      features: ["Powerful AC", "High Ground Clearance", "Tough Build", "All Weather"],
      price: "₹1,600 - ₹2,200",
      duration: "Full Day",
      bestFor: "Rough Roads, Luggage",
      image: "🚙"
    },
    {
      name: "Tempo Traveller",
      seats: "12+1",
      type: "Mini Bus",
      features: ["Multiple AC", "Comfortable Seats", "Luggage Space", "Group Travel"],
      price: "₹3,000 - ₹4,500",
      duration: "Full Day",
      bestFor: "Large Groups, Organizations",
      image: "🚐"
    },
    {
      name: "Mini Bus",
      seats: "20+",
      type: "Bus",
      features: ["High Capacity", "Multiple Doors", "Economical", "Tour Groups"],
      price: "₹5,000 - ₹8,000",
      duration: "Full Day",
      bestFor: "Tour Operators, Big Groups",
      image: "🚌"
    }
  ];

  const pickupPoints = [
    {
      name: "Kachuberia Ferry Point",
      description: "Main pickup point after boat crossing from Kakdwip",
      distance: "15 km to Gangasagar",
      timing: "5:00 AM - 9:00 PM"
    },
    {
      name: "Lot 8 Parking Area",
      description: "Secondary pickup point near main market",
      distance: "12 km to Gangasagar",
      timing: "6:00 AM - 8:00 PM"
    },
    {
      name: "Kapil Muni Temple",
      description: "Direct pickup from temple premises",
      distance: "0 km",
      timing: "24×7 available"
    },
    {
      name: "Any Hotel/Dharamshala",
      description: "Pickup from your accommodation",
      distance: "Within Sagar Island",
      timing: "As per booking"
    }
  ];

  const placesCovered = [
    "Kapil Muni Temple (Main Destination)",
    "Gangasagar Beach & Confluence Point",
    "Bharat Seva Ashram",
    "Gangasagar Lighthouse",
    "Local Markets & Shopping Areas",
    "Bathing Ghats & Prayer Halls",
    "View Points & Photography Spots",
    "Food Stalls & Restaurants"
  ];

  const pricingDetails = [
    { vehicle: "Swift Dzire", hourly: "₹200/hr", halfDay: "₹800 (4 hrs)", fullDay: "₹1,500 (8+ hrs)" },
    { vehicle: "Toyota Innova", hourly: "₹300/hr", halfDay: "₹1,200 (4 hrs)", fullDay: "₹2,200 (8+ hrs)" },
    { vehicle: "Mahindra Scorpio", hourly: "₹280/hr", halfDay: "₹1,000 (4 hrs)", fullDay: "₹1,800 (8+ hrs)" },
    { vehicle: "Tempo Traveller", hourly: "₹500/hr", halfDay: "₹2,000 (4 hrs)", fullDay: "₹3,500 (8+ hrs)" }
  ];

  return (
    <div className="container p-2">
      {/* SEO Head Section */}
      <Helmet>
        <title>Gangasagar Car Booking | Taxi Service Sagar Island | ₹800/Day Swift Dzire</title>
        <meta 
          name="description" 
          content="Book Gangasagar car service: Swift Dzire ₹800/day, Innova ₹1,800/day. Pickup from Kachuberia ferry point, Kapil Muni Temple, and all Sagar Island locations." 
        />
        <meta 
          name="keywords" 
          content="Gangasagar car booking, Sagar Island taxi service, car rental Gangasagar, taxi from Kachuberia, Kapil Muni Temple car, Gangasagar transport, Swift Dzire booking Gangasagar, Innova car Sagar Island" 
        />
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>

      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Gangasagar Car Service - Sagar Island Taxi Booking</h1>
        <p>Reliable Transportation for Your Gangasagar Pilgrimage | 24×7 Available</p>
        <div className="mt-2">
          <span style={{ 
            backgroundColor: '#e74c3c', 
            color: 'white', 
            padding: '5px 15px', 
            borderRadius: '20px',
            marginRight: '10px'
          }}>
            🚗 Starting from ₹800/day
          </span>
          <span style={{ 
            backgroundColor: '#3498db', 
            color: 'white', 
            padding: '5px 15px', 
            borderRadius: '20px' 
          }}>
            📍 All Sagar Island Locations
          </span>
        </div>
      </div>

      {/* Vehicle Fleet */}
      <div className="mt-3">
        <h2 className="section-title">🚗 Our Gangasagar Car Fleet</h2>
        <div className="services-grid mt-2">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '3rem' }}>{vehicle.image}</div>
                  <h3>{vehicle.name}</h3>
                  <div style={{ color: '#3498db', fontWeight: 'bold' }}>
                    {vehicle.seats} Seats | {vehicle.type}
                  </div>
                </div>
                
                <div style={{ margin: '1rem 0' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c' }}>
                    {vehicle.price}
                  </div>
                  <div style={{ color: '#666' }}>{vehicle.duration}</div>
                  <div style={{ color: '#27ae60' }}>Best for: {vehicle.bestFor}</div>
                </div>

                <div>
                  <h4>✅ Features:</h4>
                  {vehicle.features.map((feature, i) => (
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
                      const message = `I want to book: ${vehicle.name} for Gangasagar`;
                      window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Book {vehicle.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Pricing */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>💰 Detailed Gangasagar Car Rental Pricing</h2>
          <div className="mt-2" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Vehicle</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>Hourly Rate</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>Half Day (4 hrs)</th>
                  <th style={{ padding: '12px', textAlign: 'center' }}>Full Day (8+ hrs)</th>
                </tr>
              </thead>
              <tbody>
                {pricingDetails.map((price, index) => (
                  <tr key={index} style={{ 
                    borderBottom: '1px solid #eee',
                    backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white'
                  }}>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>{price.vehicle}</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: '#e74c3c' }}>{price.hourly}</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: '#27ae60' }}>{price.halfDay}</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: '#27ae60', fontWeight: 'bold' }}>{price.fullDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2" style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
            <p><strong>🎉 Special Package:</strong> Book car + guide together and get 10% discount!</p>
            <p><strong>📝 Note:</strong> All prices include fuel, driver charges, and Sagar Island tolls. No hidden costs.</p>
          </div>
        </div>
      </div>

      {/* Pickup Points */}
      <div className="mt-3">
        <h2 className="section-title">📍 Gangasagar Car Pickup Points</h2>
        <div className="services-grid mt-2">
          {pickupPoints.map((point, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" style={{ backgroundColor: '#3498db' }}>
                <FaMapMarkerAlt size={25} />
              </div>
              <div className="service-content">
                <h3>{point.name}</h3>
                <p>{point.description}</p>
                <div style={{ marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span><strong>Distance:</strong></span>
                    <span>{point.distance}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.3rem' }}>
                    <span><strong>Timing:</strong></span>
                    <span>{point.timing}</span>
                  </div>
                </div>
                <button 
                  className="btn btn-primary mt-1"
                  onClick={() => {
                    const message = `I need pickup from: ${point.name}`;
                    window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Book Pickup Here
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Places Covered */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>🗺️ Gangasagar Places Covered by Our Cars</h2>
          <div className="mt-2">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {placesCovered.map((place, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#27ae60', marginRight: '0.5rem' }}>✓</span>
                  <span>{place}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2" style={{ backgroundColor: '#e8f5e9', padding: '1rem', borderRadius: '8px' }}>
            <p><strong>🔄 Multiple Stops Allowed:</strong> You can visit all these places in one trip with our cars. No extra charges for multiple stops within Sagar Island.</p>
          </div>
        </div>
      </div>

      {/* Service Inclusions */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>✅ What's Included in Gangasagar Car Service</h2>
          <div className="services-grid mt-2">
            {[
              { 
                icon: <FaGasPump />, 
                title: "Fuel Included", 
                desc: "All fuel costs covered, no extra charges" 
              },
              { 
                icon: <FaUser />, 
                title: "Experienced Driver", 
                desc: "Local drivers who know all Sagar Island routes" 
              },
              { 
                icon: <FaShieldAlt />, 
                title: "Vehicle Insurance", 
                desc: "Full insurance coverage for your safety" 
              },
              { 
                icon: <FaRoad />, 
                title: "Tolls & Permits", 
                desc: "All Sagar Island entry permits included" 
              },
              { 
                icon: <FaClock />, 
                title: "Flexible Timing", 
                desc: "Extend hours without advance notice" 
              },
              { 
                icon: <FaRupeeSign />, 
                title: "No Hidden Charges", 
                desc: "Transparent pricing, what you see is what you pay" 
              }
            ].map((item, index) => (
              <div key={index} className="service-card" style={{ border: '1px solid #eee' }}>
                <div className="service-icon" style={{ backgroundColor: '#3498db' }}>
                  {item.icon}
                </div>
                <div className="service-content">
                  <h3>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Process */}
      <div className="service-card mt-3">
        <div className="service-content">
          <h2>📋 How to Book Gangasagar Car Service</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#e74c3c', 
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
              <div style={{ fontWeight: 'bold' }}>Choose Vehicle</div>
              <div>Select based on group size & budget</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#e74c3c', 
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
              <div style={{ fontWeight: 'bold' }}>Specify Pickup</div>
              <div>Choose location & time</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#e74c3c', 
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
              <div>50% advance via UPI/Bank</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#e74c3c', 
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
              <div style={{ fontWeight: 'bold' }}>Enjoy Your Ride</div>
              <div>Car arrives at scheduled time</div>
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
        <h2>🚗 Book Your Gangasagar Car Today</h2>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0', color: '#f39c12' }}>
          Starting from ₹800 per day
        </div>
        <p>Complete your Gangasagar pilgrimage with comfortable and reliable transportation</p>
        
        <div className="cta-buttons mt-2">
          <a href="tel:+919933888397" className="btn" style={{ 
            backgroundColor: '#27ae60', 
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.8rem 2rem',
            margin: '0.5rem'
          }}>
            📞 Call for Car Booking
          </a>
          <a 
            href="https://wa.me/917029675532?text=Hello,%20I%20want%20to%20book%20a%20car%20for%20Gangasagar"
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
            💬 WhatsApp Car Details
          </a>
          <button 
            className="btn"
            style={{ 
              backgroundColor: '#e74c3c', 
              color: 'white',
              fontSize: '1.1rem',
              padding: '0.8rem 2rem',
              margin: '0.5rem'
            }}
            onClick={() => {
              const message = "I need a car price quote for Gangasagar: \n• Number of people: \n• Date: \n• Duration: ";
              window.open(`https://wa.me/917029675532?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            💰 Get Price Quote
          </button>
        </div>
        
        <div className="mt-2" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          ✅ AC Vehicles | ✅ 24×7 Availability | ✅ Local Drivers | ✅ No Hidden Charges
        </div>
      </div>
    </div>
  );
};

export default CarBooking;