// src/pages/TermsConditions.jsx
import React from 'react';

const TermsConditions = () => {
  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Terms & Conditions</h1>
        <p>Effective Date: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      <div className="service-card">
        <div className="service-content">
          <p>
            Welcome to Gangasagar Travel Services. By accessing our website and using our services, you agree to be 
            bound by these Terms & Conditions. Please read them carefully before making any bookings.
          </p>

          <h2 className="mt-3">1. Acceptance of Terms</h2>
          <p>
            By using our website and services, you acknowledge that you have read, understood, and agree to be bound 
            by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.
          </p>

          <h2 className="mt-3">2. Booking and Reservations</h2>
          <h3>2.1 Booking Process</h3>
          <p>All bookings are subject to availability and confirmation. The booking process includes:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Inquiry and availability check</li>
            <li>Provision of booking details and pricing</li>
            <li>Advance payment as specified</li>
            <li>Confirmation receipt issuance</li>
          </ul>

          <h3>2.2 Booking Confirmation</h3>
          <p>
            A booking is considered confirmed only after we receive the specified advance payment and issue a 
            confirmation receipt. Verbal confirmations are not binding.
          </p>

          <h3>2.3 Booking Modifications</h3>
          <p>
            Requests for booking modifications (dates, services, number of persons) are subject to availability 
            and may incur additional charges.
          </p>

          <h2 className="mt-3">3. Payments and Pricing</h2>
          <h3>3.1 Pricing</h3>
          <p>
            All prices quoted are in Indian Rupees (₹) and include applicable taxes unless specified otherwise. 
            Prices are subject to change without notice, but confirmed bookings will be honored at the agreed price.
          </p>

          <h3>3.2 Payment Terms</h3>
          <p>Payment terms vary by service:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>Hotels:</strong> 50% advance, 50% on check-in</li>
            <li><strong>Car Services:</strong> Full payment before service commencement</li>
            <li><strong>Food Services:</strong> Payment per meal or package basis</li>
            <li><strong>Guide Services:</strong> Full payment at start of service</li>
            <li><strong>Boat Services:</strong> Full payment before boarding</li>
          </ul>

          <h3>3.3 Payment Methods</h3>
          <p>We accept the following payment methods:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Bank transfer/IMPS/NEFT</li>
            <li>UPI payments</li>
            <li>Cash (at our office or to service provider)</li>
            <li>Digital wallets (subject to availability)</li>
          </ul>

          <h2 className="mt-3">4. Cancellation Policy</h2>
          <p>Our cancellation policy is as follows:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>Cancellation 7+ days before service:</strong> Full refund (minus processing fees)</li>
            <li><strong>Cancellation 3-7 days before service:</strong> 50% refund</li>
            <li><strong>Cancellation less than 3 days before service:</strong> No refund</li>
            <li><strong>No-show:</strong> No refund, full charges apply</li>
          </ul>
          <p>Please refer to our separate Refund Policy for detailed information.</p>

          <h2 className="mt-3">5. Service Provider Responsibilities</h2>
          <h3>5.1 Our Role</h3>
          <p>
            We act as an intermediary between you and service providers (hotels, transport operators, guides, etc.). 
            We are responsible for:
          </p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Arranging services as per booking confirmation</li>
            <li>Communicating your requirements to service providers</li>
            <li>Assisting with service-related issues</li>
          </ul>

          <h3>5.2 Service Provider Standards</h3>
          <p>
            While we strive to work with reliable service providers, we cannot guarantee their performance or be 
            held liable for their actions. Service standards may vary.
          </p>

          <h2 className="mt-3">6. Pilgrim Responsibilities</h2>
          <p>As a pilgrim using our services, you agree to:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Provide accurate and complete information during booking</li>
            <li>Carry valid identification documents</li>
            <li>Adhere to temple rules and local regulations</li>
            <li>Respect local customs and traditions</li>
            <li>Maintain appropriate decorum at religious sites</li>
            <li>Follow safety instructions from guides and service providers</li>
          </ul>

          <h2 className="mt-3">7. Force Majeure</h2>
          <p>
            We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond 
            our reasonable control, including but not limited to:
          </p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Natural disasters (floods, storms, earthquakes)</li>
            <li>Government restrictions or travel bans</li>
            <li>Transportation strikes or disruptions</li>
            <li>Temple closures or restricted access</li>
            <li>Pandemics or health emergencies</li>
          </ul>

          <h2 className="mt-3">8. Liability and Insurance</h2>
          <h3>8.1 Limitation of Liability</h3>
          <p>
            Our liability for any claim arising from our services shall be limited to the amount paid for the specific 
            service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.
          </p>

          <h3>8.2 Travel Insurance</h3>
          <p>
            We strongly recommend that pilgrims obtain comprehensive travel insurance covering:
          </p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Trip cancellation and interruption</li>
            <li>Medical emergencies and evacuation</li>
            <li>Lost luggage and personal effects</li>
            <li>Personal accident coverage</li>
          </ul>

          <h2 className="mt-3">9. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and images, is our property or licensed to us 
            and is protected by copyright laws. You may not reproduce, distribute, or use any content without our 
            prior written permission.
          </p>

          <h2 className="mt-3">10. Dispute Resolution</h2>
          <h3>10.1 Governing Law</h3>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes 
            shall be subject to the exclusive jurisdiction of the courts in West Bengal.
          </p>

          <h3>10.2 Resolution Process</h3>
          <p>In case of any dispute:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>First, contact our customer service for resolution</li>
            <li>If unresolved, the matter may be referred to mediation</li>
            <li>Legal proceedings may be initiated only after attempting mediation</li>
          </ul>

          <h2 className="mt-3">11. Amendments</h2>
          <p>
            We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately 
            upon posting on our website. Continued use of our services after changes constitutes acceptance of the 
            modified terms.
          </p>

          <h2 className="mt-3">12. Contact Information</h2>
          <p>For any questions regarding these Terms & Conditions, please contact:</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '5px', marginTop: '1rem' }}>
            <p><strong>Gangasagar Travel Services</strong></p>
            <p>📞 Customer Service: +91 9933888397</p>
            <p>📧 Email: terms@gangasagartravel.com</p>
            <p>📍 Address: Gangasagar, Sagar Island, West Bengal - 743373</p>
            <p>⏰ Business Hours: 24×7 (During pilgrimage season)</p>
          </div>

          <div className="mt-3" style={{ padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
            <p><strong>Important Notice for Pilgrims:</strong></p>
            <p>
              By using our services, you acknowledge that pilgrimage to Gangasagar involves travel to remote areas 
              with basic facilities. Weather conditions, tidal patterns, and local circumstances may affect service 
              delivery. We appreciate your understanding and cooperation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;