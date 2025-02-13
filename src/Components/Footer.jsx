import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
           
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere felis at urna tincidunt, sed sodales mi cursus.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 1234 Example St, City, Country</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
