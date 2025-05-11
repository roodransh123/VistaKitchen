import React from 'react';
import '../styles/Footer.css';
 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: Branding */}
        <div className="footer-section footer-left">
          <h3>Kitchen Design</h3>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          <p>Roodransh Mehta and team</p>
        </div>

        {/* Center: Links */}
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/kitchen">Kitchens</a></li>
            <li><a href="/wardrobes">Wardrobes</a></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="footer-section footer-contact">
          <h4>Contact</h4>
          <p><i className="fas fa-phone-alt"></i> (123) 456-7890</p>
          <p><i className="fas fa-envelope"></i> info@kitchendesign.com</p>
        </div>

        {/* Social */}
        <div className="footer-section footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
