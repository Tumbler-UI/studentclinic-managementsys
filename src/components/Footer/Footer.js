// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Nexus EV</h3>
          <p>Pioneering the next generation of electric vehicles</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#development">Development</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Invest</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>123 Innovation Drive</p>
          <p>Tech City, TC 12345</p>
          <p>info@nexusev.com</p>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#linkedin">LinkedIn</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nexus EV Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;