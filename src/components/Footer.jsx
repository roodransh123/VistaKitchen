import React from 'react';
import "../styles/Footer.css";  // Assuming you have a separate CSS file for footer styles
import "../style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; All rights reserved</p>
          <p>by Roodransh Mehta and team</p>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>            
          </ul>
        </div>

        <div className="footer-contact">
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@kitchendesign.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
