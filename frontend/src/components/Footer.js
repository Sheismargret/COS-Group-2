import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="pau-footer">
      <div className="footer-wrap">
        <div className="footer-brand">
          <h2 className="footer-logo">PAU Connect</h2>
          <p>Connecting talent from Pan-Atlantic University with multinational opportunities.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Find Jobs</li>
            <li>Post a Job</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 Main Campus, Ibeju-Lekki</p>
          <p>✉️ support@pauconnect.edu</p>
        </div>
      </div>
      <div className="footer-copy">
        <p>© 2026 PAU Connect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;