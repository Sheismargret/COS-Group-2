import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-row">
        
        {/* Column 1 */}
        <div className="footer-col">
          <h5 className="footer-brand"><span className="blue-text">PAU Connect</span></h5>
          <p className="footer-text">Connecting the next generation of professionals with leading companies.</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3 className="col-title">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="/FindJobs">Find Jobs</a></li>
            <li><a href="/PostJob">Post a Job</a></li>
            <li><a href="/About">About Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3 className="col-title">Contact Us</h3>
          <p className="footer-text">Email: info@pauconnect.edu</p>
          <p className="footer-text">Phone: +234 123 456 7890</p>
          <div className="social-links">
             <span>FB</span> <span>TW</span> <span>IG</span>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom-bar">
        <p>© 2026 PAU Connect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;