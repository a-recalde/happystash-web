import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HappyStash</h3>
            <p>Celebrate and preserve your special moments with HappyStash - the secure memory sharing app.</p>
          </div>
          
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:support@happystash.app">support@happystash.app</a></p>
          </div>

          <div className="footer-section copyright-section">
            <p>&copy; {currentYear} HappyStash. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
