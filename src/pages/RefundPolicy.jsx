// src/pages/RefundPolicy.jsx
import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container p-2">
      <div className="hero" style={{ padding: '3rem 1rem', marginBottom: '2rem' }}>
        <h1>Refund Policy</h1>
        <p>Effective Date: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      <div className="service-card">
        <div className="service-content">
          <p>
            At Gangasagar Travel Services, we strive to provide transparent and fair refund policies. This policy 
            outlines the circumstances under which refunds are provided and the process for obtaining them.
          </p>

          <div className="mt-3" style={{ padding: '1rem', backgroundColor: '#d4edda', borderRadius: '5px' }}>
            <h3 style={{ color: '#155724' }}>⚠️ Important Note:</h3>
            <p>
              During peak pilgrimage seasons (especially Makar Sankranti), our cancellation and refund policies 
              are strictly enforced due to high demand and limited availability.
            </p>
          </div>

          <h2 className="mt-3">1. General Refund Principles</h2>
          <p>Our refund policy is based on the following principles:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Fair treatment of both pilgrims and service providers</li>
            <li>Consideration of advance commitments made to service providers</li>
            <li>Timely processing of legitimate refund requests</li>
            <li>Transparent communication about refund eligibility</li>
          </ul>

          <h2 className="mt-3">2. Refund Eligibility by Service Type</h2>
          
          <h3>2.1 Hotel/Dharamshala Bookings</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Cancellation Timeframe</th>
                <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Refund Percentage</th>
                <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Processing Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>7+ days before check-in</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#27ae60', fontWeight: 'bold' }}>100%</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>7-10 business days</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>3-7 days before check-in</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#f39c12', fontWeight: 'bold' }}>50%</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>7-10 business days</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Less than 3 days before check-in</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#e74c3c', fontWeight: 'bold' }}>No Refund</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Not applicable</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>No-show</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#e74c3c', fontWeight: 'bold' }}>No Refund</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Not applicable</td>
              </tr>
            </tbody>
          </table>

          <h3>2.2 Car/Transport Services</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Cancellation Timeframe</th>
                <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Refund Percentage</th>
                <th style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>24+ hours before service</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#27ae60', fontWeight: 'bold' }}>100%</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Minus ₹200 processing fee</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>4-24 hours before service</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#f39c12', fontWeight: 'bold' }}>50%</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Driver allocation costs</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Less than 4 hours before service</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6', color: '#e74c3c', fontWeight: 'bold' }}>No Refund</td>
                <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>Vehicle dispatched</td>
              </tr>
            </tbody>
          </table>

          <h3>2.3 Food Services</h3>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>Individual meals:</strong> No refund for cancellations less than 2 hours before meal time</li>
            <li><strong>Meal packages:</strong> 50% refund if cancelled 24+ hours before start</li>
            <li><strong>Special pooja food:</strong> No refund as ingredients are prepared in advance</li>
          </ul>

          <h3>2.4 Boat Services</h3>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>Cancellation 4+ hours before departure:</strong> 100% refund</li>
            <li><strong>Cancellation 1-4 hours before departure:</strong> 50% refund</li>
            <li><strong>Cancellation less than 1 hour before departure:</strong> No refund</li>
            <li><strong>Weather-related cancellations:</strong> 100% refund or reschedule</li>
          </ul>

          <h3>2.5 Guide Services</h3>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>Cancellation 24+ hours before service:</strong> 100% refund</li>
            <li><strong>Cancellation 4-24 hours before service:</strong> 50% refund</li>
            <li><strong>Cancellation less than 4 hours before service:</strong> No refund</li>
          </ul>

          <h3>2.6 Tour Packages</h3>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>Cancellation 7+ days before start:</strong> 80% refund</li>
            <li><strong>Cancellation 3-7 days before start:</strong> 50% refund</li>
            <li><strong>Cancellation less than 3 days before start:</strong> No refund</li>
          </ul>

          <h2 className="mt-3">3. Special Circumstances</h2>
          
          <h3>3.1 Medical Emergencies</h3>
          <p>
            In case of genuine medical emergencies with supporting documentation (doctor's certificate, hospital 
            admission proof), we offer:
          </p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Full refund regardless of cancellation timeframe</li>
            <li>Priority processing of refund</li>
            <li>Assistance with insurance claims</li>
          </ul>

          <h3>3.2 Force Majeure Events</h3>
          <p>
            For cancellations due to force majeure events (natural disasters, government restrictions, temple closures), 
            we offer:
          </p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Full refund or credit for future booking</li>
            <li>Choice between refund or rescheduling</li>
            <li>Waiver of cancellation fees</li>
          </ul>

          <h3>3.3 Service Provider Cancellations</h3>
          <p>
            If a service provider cancels on their end (rare occurrence), we will:
          </p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Provide a full immediate refund</li>
            <li>Offer alternative arrangements if available</li>
            <li>Compensate with discount on future booking</li>
          </ul>

          <h2 className="mt-3">4. Refund Process</h2>
          
          <h3>4.1 How to Request a Refund</h3>
          <p>To request a refund:</p>
          <ol style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Contact us via phone or WhatsApp with your booking reference</li>
            <li>Provide reason for cancellation</li>
            <li>Submit any required documentation (for medical/emergency cases)</li>
            <li>Receive refund eligibility confirmation within 24 hours</li>
          </ol>

          <h3>4.2 Refund Processing Time</h3>
          <p>Refunds are processed within:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li><strong>UPI/Bank Transfer:</strong> 3-5 business days</li>
            <li><strong>Credit/Debit Card:</strong> 5-10 business days (depends on bank)</li>
            <li><strong>Cash Refund:</strong> Immediate at our office</li>
          </ul>

          <h3>4.3 Refund Methods</h3>
          <p>Refunds are issued using the original payment method:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Bank transfers to original account</li>
            <li>UPI to original UPI ID</li>
            <li>Cash at our office (with receipt)</li>
          </ul>

          <h2 className="mt-3">5. Non-Refundable Items</h2>
          <p>The following are non-refundable under any circumstances:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Processing fees (if applicable)</li>
            <li>Third-party charges already incurred</li>
            <li>Special arrangement charges</li>
            <li>Customized services with advance preparation</li>
          </ul>

          <h2 className="mt-3">6. Partial Refunds</h2>
          <p>In certain situations, partial refunds may be issued:</p>
          <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Early departure from hotel (pro-rata basis)</li>
            <li>Reduction in group size after booking</li>
            <li>Partial service cancellation</li>
          </ul>

          <h2 className="mt-3">7. Dispute Resolution</h2>
          <p>
            If you disagree with our refund decision, you may:
          </p>
          <ol style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Request review with additional documentation</li>
            <li>Escalate to senior management</li>
            <li>Seek mediation if unresolved</li>
          </ol>

          <h2 className="mt-3">8. Contact for Refund Inquiries</h2>
          <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '5px', marginTop: '1rem' }}>
            <p><strong>Refund Department</strong></p>
            <p>📞 Phone: +91 9933888397 (Ask for Refund Department)</p>
            <p>📧 Email: refunds@gangasagartravel.com</p>
            <p>📱 WhatsApp: +91 9933888397 (Message "REFUND")</p>
            <p>📍 Office: Gangasagar, Sagar Island, West Bengal - 743373</p>
            <p>⏰ Processing Hours: 10 AM - 6 PM (Monday-Saturday)</p>
          </div>

          <div className="mt-3" style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
            <h3>📝 Important Notes:</h3>
            <ul>
              <li>All refund requests must be in writing (email/WhatsApp)</li>
              <li>Verbal cancellation requests are not valid for refund processing</li>
              <li>Refund amounts are calculated based on service date, not booking date</li>
              <li>Bank charges for international transfers are deducted from refund amount</li>
              <li>Refund policies are stricter during Makar Sankranti (Jan 14-15)</li>
            </ul>
          </div>

          <div className="mt-3" style={{ padding: '1rem', backgroundColor: '#d1ecf1', borderRadius: '5px' }}>
            <h3 style={{ color: '#0c5460' }}>💡 Travel Insurance Recommendation</h3>
            <p>
              We strongly recommend purchasing travel insurance that covers trip cancellation. This provides 
              protection beyond our refund policy and covers additional expenses in case of emergencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;