// src/pages/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      <div className="service-card">
        <div className="service-content">
          <p>
            Welcome to Gangasagar Travel Services. We are committed to protecting your privacy and ensuring the security 
            of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you use our website and services.
          </p>

          <h2 className="mt-3">1. Information We Collect</h2>
          <h3>1.1 Personal Information</h3>
          <p>We may collect personal information that you provide to us directly, including:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Name, email address, and phone number</li>
            <li>Booking details and preferences</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Identification documents for booking verification</li>
            <li>Emergency contact information</li>
          </ul>

          <h3>1.2 Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on site</li>
            <li>Referring website information</li>
          </ul>

          <h2 className="mt-3">2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>To process and manage your bookings and reservations</li>
            <li>To communicate with you about your bookings and inquiries</li>
            <li>To send booking confirmations and updates</li>
            <li>To provide customer support and respond to your requests</li>
            <li>To improve our website, services, and user experience</li>
            <li>To comply with legal obligations and regulations</li>
            <li>To send promotional offers and updates (with your consent)</li>
          </ul>

          <h2 className="mt-3">3. Information Sharing and Disclosure</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>
              <strong>Service Providers:</strong> With third-party service providers who assist in providing our services 
              (hotels, transportation providers, guides, etc.)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
            </li>
            <li>
              <strong>With Your Consent:</strong> When you give us explicit permission to share your information
            </li>
          </ul>

          <h2 className="mt-3">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
            the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="mt-3">5. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes for which it was 
            collected, including for legal, accounting, or reporting requirements. Booking information is typically 
            retained for 3 years from the date of your last booking.
          </p>

          <h2 className="mt-3">6. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Right to access the personal information we hold about you</li>
            <li>Right to correct inaccurate or incomplete information</li>
            <li>Right to request deletion of your personal information</li>
            <li>Right to restrict or object to processing of your information</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent at any time</li>
          </ul>

          <h2 className="mt-3">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. This Privacy Policy does not apply to those websites, 
            and we encourage you to review their privacy policies before providing any personal information.
          </p>

          <h2 className="mt-3">8. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
            information from children. If you believe we have collected information from a child, please contact us 
            immediately.
          </p>

          <h2 className="mt-3">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy 
            Policy periodically.
          </p>

          <h2 className="mt-3">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '5px', marginTop: '1rem' }}>
            <p><strong>Gangasagar Travel Services</strong></p>
            <p>📞 Phone: +91 9933888397</p>
            <p>📧 Email: privacy@gangasagartravel.com</p>
            <p>📍 Address: Gangasagar, Sagar Island, West Bengal - 743373</p>
          </div>

          <div className="mt-3" style={{ padding: '1rem', backgroundColor: '#e8f4fd', borderRadius: '5px' }}>
            <p><strong>Note for Pilgrims:</strong></p>
            <p>
              Your information is shared with service providers only to facilitate your pilgrimage arrangements. 
              We do not sell or rent your personal information to third parties for marketing purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;