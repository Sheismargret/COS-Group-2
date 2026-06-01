import React from 'react';
import '../styles/Footer.css'; 
import { Link } from 'react-router-dom'; 
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

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
            {/* Swapped <a> tags out for React Router <Link> tags */}
            <li><Link to="/FindJobs">Find Jobs</Link></li>
            <li><Link to="/PostJob">Post a Job</Link></li>
            <li><Link to="/About">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3*/}
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
<<<<<<< HEAD
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-media-link"><FaFacebook /></a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-media-link"><FaTwitter /></a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-media-link"><FaInstagram /></a>
=======
             <a href="https://facebook.com" className="social-media-link" aria-label="Facebook"><FaFacebook /></a>
             <a href="https://twitter.com" className="social-media-link" aria-label="Twitter"><FaTwitter /></a>
             <a href="https://instagram.com" className="social-media-link" aria-label="Instagram"><FaInstagram /></a>
>>>>>>> f33ce56b14edc2db64e22d70aa4da4d0ca1c6967
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
