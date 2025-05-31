// ContactInvest.js
import React, { useState } from 'react';
import './ContactInvest.css';

const ContactInvest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'investment'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      interest: 'investment'
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Investment Opportunities</h2>
          <p>
            We're seeking strategic partners and investors to join us in revolutionizing 
            electric mobility. Current funding round open until Q3 2024.
          </p>
          <div className="investor-benefits">
            <h3>Investor Benefits:</h3>
            <ul>
              <li>Early access to proprietary technology</li>
              <li>Equity stake in a high-growth market</li>
              <li>Participation in future revenue sharing</li>
              <li>Exclusive updates and facility tours</li>
            </ul>
          </div>
          <div className="contact-details">
            <p><strong>Email:</strong> invest@nexusev.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="contact-form">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for your interest!</h3>
              <p>Our team will contact you within 48 hours to discuss potential opportunities.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company (Optional)</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="interest">Interest</label>
                <select 
                  id="interest" 
                  name="interest" 
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="investment">Investment</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Submit Inquiry</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactInvest;