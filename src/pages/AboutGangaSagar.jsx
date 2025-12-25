// // src/pages/AboutGangaSagar.jsx
// import React from 'react';

// const AboutGangaSagar = () => {
//   return (
//     <div className="container p-2">
//       <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
//         <h1>About Gangasagar</h1>
//         <p>Discover the spiritual significance of this holy pilgrimage site</p>
//       </div>

//       <div className="service-card mb-3">
//         <div className="service-content">
//           <h2>History of Gangasagar</h2>
//           <p>
//             Gangasagar is a sacred place where the holy river Ganga merges with the Bay of Bengal. 
//             According to Hindu mythology, this is the place where King Sagar's 60,000 sons attained 
//             salvation after being reduced to ashes by Sage Kapil's curse.
//           </p>
//         </div>
//       </div>

//       <div className="service-card mb-3">
//         <div className="service-content">
//           <h2>Kapil Muni Temple Significance</h2>
//           <p>
//             The Kapil Muni Temple is dedicated to Sage Kapil, who performed severe penance here. 
//             The temple is believed to be the spot where the sage sat in meditation for thousands of years.
//           </p>
//         </div>
//       </div>

//       <div className="service-card mb-3">
//         <div className="service-content">
//           <h2>Gangasagar Mela</h2>
//           <p>
//             Every year on Makar Sankranti (January 14/15), millions of pilgrims gather here to take 
//             a holy dip at the confluence. This is the second largest human congregation in India after 
//             the Kumbh Mela.
//           </p>
//         </div>
//       </div>

//       <div className="service-card mb-3">
//         <div className="service-content">
//           <h2>Best Time to Visit</h2>
//           <ul style={{ paddingLeft: '1.5rem' }}>
//             <li><strong>Winter (Oct-Feb):</strong> Pleasant weather, ideal for pilgrimage</li>
//             <li><strong>Makar Sankranti:</strong> For Gangasagar Mela experience</li>
//             <li><strong>Avoid Monsoon:</strong> Difficult travel conditions</li>
//           </ul>
//         </div>
//       </div>

//       <div className="map-container mt-3">
//         <iframe 
//           title="Gangasagar Detailed Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.631897141211!2d88.07706427503112!3d22.03666587973424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02ee5616b61f2d%3A0xce1e35cbf8e9bd0b!2sKapil%20Muni%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default AboutGangaSagar;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutGangaSagar = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Gangasagar - Complete Guide to Kapil Muni Temple & Pilgrimage",
    "description": "Complete history and significance of Gangasagar pilgrimage. Learn about Kapil Muni Temple, Gangasagar Mela, best time to visit, and sacred confluence of Ganga-Bay of Bengal.",
    "mainEntity": {
      "@type": "TouristAttraction",
      "name": "Gangasagar (Sagar Island)",
      "description": "Sacred Hindu pilgrimage site where River Ganga meets Bay of Bengal, location of Kapil Muni Temple",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sagar Island",
        "addressRegion": "West Bengal",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "21.6375681",
        "longitude": "88.0752284"
      },
      "containedInPlace": {
        "@type": "Place",
        "name": "Kapil Muni Temple",
        "description": "Ancient temple dedicated to Sage Kapil at Gangasagar"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "05:00",
        "closes": "21:00"
      },
      "publicAccess": true
    },
    "author": {
      "@type": "Organization",
      "name": "Gangasagar Yatra Services",
      "url": "https://gangasagaryatra.vectosmind.com"
    }
  };

  const templeSchema = {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship",
    "additionalType": "HinduTemple",
    "name": "Kapil Muni Temple, Gangasagar",
    "description": "Ancient Hindu temple dedicated to Sage Kapil located at Gangasagar where River Ganga meets Bay of Bengal",
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
      "latitude": "21.6375681",
      "longitude": "88.0752284"
    },
    "openingHours": "05:00-21:00",
    "photo": "https://yourwebsite.com/images/kapil-muni-temple.jpg",
    "isAccessibleForFree": true,
    "containedInPlace": {
      "@type": "TouristAttraction",
      "name": "Gangasagar"
    }
  };

  const melaEvent = {
    "@context": "https://schema.org",
    "@type": "Festival",
    "name": "Gangasagar Mela",
    "description": "Annual Hindu pilgrimage festival during Makar Sankranti at Gangasagar where millions take holy dip",
    "startDate": "2026-01-14",
    "endDate": "2026-01-15",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Gangasagar, Sagar Island",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sagar Island",
        "addressRegion": "West Bengal",
        "addressCountry": "India"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "West Bengal Government"
    },
    "typicalAgeRange": "18-"
  };

  return (
    <div className="container p-2">
      {/* SEO Head Section */}
      <Helmet>
        <title>About Gangasagar - Kapil Muni Temple History & Gangasagar Mela Guide 2026</title>
        <meta
          name="description"
          content="Complete guide to Gangasagar pilgrimage: History of Kapil Muni Temple, significance of Ganga-Bay of Bengal confluence, Gangasagar Mela details, best time to visit Sagar Island."
        />
        <meta
          name="keywords"
          content="Gangasagar history, Kapil Muni Temple, Gangasagar Mela, Sagar Island pilgrimage, Ganga Bay of Bengal confluence, Makar Sankranti, Hindu pilgrimage sites West Bengal, Gangasagar significance"
        />
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(templeSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(melaEvent)}
        </script>
      </Helmet>

      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>About Gangasagar - Complete Pilgrimage Guide</h1>
        <p>Discover the spiritual significance, history, and complete guide to Gangasagar pilgrimage site</p>
      </div>

      {/* History Section */}
      <div className="service-card mb-3">
        <div className="service-content">
          <h2>History of Gangasagar - The Sacred Confluence</h2>
          <p>
            <strong>Gangasagar</strong>, located on <strong>Sagar Island</strong> in West Bengal, is one of the most
            sacred pilgrimage sites in Hinduism where the holy river <strong>Ganga meets the Bay of Bengal</strong>.
            According to Hindu mythology, this is the place where <strong>King Sagar's 60,000 sons</strong> attained
            salvation after being reduced to ashes by <strong>Sage Kapil's curse</strong>. The annual
            <strong> Gangasagar pilgrimage</strong> attracts millions of devotees seeking spiritual purification.
          </p>
        </div>
      </div>

      {/* Temple Section */}
      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Kapil Muni Temple - Spiritual Significance</h2>
          <p>
            The <strong>Kapil Muni Temple</strong> at Gangasagar is dedicated to <strong>Sage Kapil</strong>,
            who performed severe penance here for thousands of years. This ancient temple marks the exact spot
            where the sage meditated and is considered one of the most important <strong>Hindu temples in West Bengal</strong>.
            Pilgrims visiting Gangasagar must seek blessings at this temple after taking the holy dip.
          </p>
        </div>
      </div>

      {/* Mela Section */}
      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Gangasagar Mela - World's Second Largest Pilgrimage Gathering</h2>
          <p>
            Every year on <strong>Makar Sankranti</strong> (January 14/15), millions of pilgrims gather at
            <strong> Gangasagar Mela</strong> to take a holy dip at the Ganga-Bay of Bengal confluence.
            This annual religious fair is the <strong>second largest human congregation in India</strong> after
            the Kumbh Mela. The <strong>Gangasagar pilgrimage during Makar Sankranti</strong> is believed to wash away
            all sins and grant moksha (liberation).
          </p>
        </div>
      </div>

      {/* Best Time Section */}
      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Best Time to Visit Gangasagar - Complete Travel Guide</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>
              <strong>Winter Season (October-February):</strong> Pleasant weather with temperatures between
              15°C to 25°C, ideal for <strong>Gangasagar pilgrimage</strong> and temple visits
            </li>
            <li>
              <strong>Makar Sankranti (January 14/15):</strong> For experiencing the grand
              <strong> Gangasagar Mela</strong> and spiritual festivities (advance booking required)
            </li>
            <li>
              <strong>Monsoon Season (June-September):</strong> Difficult travel conditions, boat services
              may be limited, not recommended for pilgrimage
            </li>
            <li>
              <strong>Summer Season (March-May):</strong> Hot and humid, early morning visits recommended
            </li>
          </ul>
        </div>
      </div>

      {/* Travel Tips Section */}
      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Gangasagar Travel Information & Tips</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div>
              <h3>How to Reach</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li><strong>From Kolkata:</strong> Road to Kakdwip (100 km) then ferry to Sagar Island</li>
                <li><strong>Nearest Airport:</strong> Netaji Subhas Chandra Bose Airport, Kolkata</li>
                <li><strong>Nearest Railway:</strong> Kakdwip Railway Station</li>
              </ul>
            </div>
            <div>
              <h3>Important Facilities</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Government and private accommodation available</li>
                <li>Vegetarian food stalls and restaurants</li>
                <li>Medical facilities during mela season</li>
                <li>Cloak rooms and locker facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="service-card mb-3">
        <div className="service-content">
          <h2>Gangasagar Location Map</h2>
          <p>
            <strong>Kapil Muni Temple, Gangasagar</strong> is located at the southern tip of Sagar Island
            in the South 24 Parganas district of West Bengal, India. The exact coordinates are
            <strong> 21°38'15.25"N 88°04'30.82"E</strong>
          </p>
          <div className="map-container mt-2">
            <iframe
              title="Gangasagar Detailed Map - Kapil Muni Temple Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5718.6253279978855!2d88.07167589638385!3d21.634674351980546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270fe52560879%3A0xe9371a553af46b23!2sKapil%20Muni%20Ashram%2C%20Gangasagar!5e0!3m2!1sen!2sin!4v1766661050049!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="service-card" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div className="service-content">
          <h2>Plan Your Gangasagar Pilgrimage</h2>
          <p>
            Need help planning your <strong>Gangasagar Yatra</strong>? Contact us for complete pilgrimage
            services including travel guide, accommodation, food, and transportation arrangements.
          </p>
          <div className="cta-buttons" style={{ marginTop: '1rem' }}>
            <a href="tel:+919933888397" className="btn btn-primary">
              📞 Call for Pilgrimage Help: +91 99338 88397
            </a>
            <a
              href="https://wa.me/917029675532?text=I need help planning my Gangasagar Yatra"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              💬 WhatsApp for Gangasagar Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGangaSagar;