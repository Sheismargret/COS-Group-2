import React from 'react';
import '../styles/Footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-row">
        
        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="col-title"><span className="blue-text">PAU Connect</span></h3>
          <p className="footer-text">Connecting the next generation of professionals with leading companies.</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3 className="col-title">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/find-jobs">Find Jobs</Link></li>
            <li><Link to="/post-job">Post a Job</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

{/* Column 3: Contact */}
        <div className="footer-col">
          <h3 className="col-title">Contact Us</h3>
          
          {/* Email with Icon */}
          <div className="contact-item">
            <IoMdMail className="contact-icon" />
            <span className="footer-text">info@pauconnect.ng</span>
          </div>
          
          {/* Phone with Icon */}
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span className="footer-text">+234 123 456 7890</span>
          </div>

          {/* Social Media Row */}
          <div className="social-links-row">
             <a href="https://facebook.com" className="social-media-link" aria-label="Facebook"><FaFacebook /></a>
             <a href="https://twitter.com" className="social-media-link" aria-label="Twitter"><FaTwitter /></a>
             <a href="https://instagram.com" className="social-media-link" aria-label="Instagram"><FaInstagram /></a>
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
