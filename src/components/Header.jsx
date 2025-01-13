import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <div className="header-top">
        <div className="logo-and-title">
          <div className="logo-placeholder">
            <img src="/path-to-logo.png" alt="Logo" width="50" height="50" />
          </div>
          <a href="/" style={{ textDecoration: 'none' }}>
            <h2>VistaKitchen</h2>
          </a>
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/interior">Kitchens</Link></li>
            <li><Link to="/interior">Wardrobes</Link></li>
            <li><Link to="/floors">Vanities</Link></li>
            <li><Link to="/ceilings">Floorings</Link></li>
            <li><Link to="/panels">Ceilings</Link></li>
          </ul>
        </nav>

        <div className="profile">
          {/* Profile content here */}
        </div>
      </div>

      <div className="header-bottom">
        <div className="dropdown-wrapper">
          <button 
            onClick={toggleDropdown}
            className="dropdown-button"
          >
            <span style={{fontWeight: 'bold'}}>Price Calculators</span>
            <svg 
              className={`dropdown-arrow ${dropdownOpen ? 'rotate' : ''}`}
              width="10" 
              height="6" 
              viewBox="0 0 10 6" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0L5 4.5 2 0H8Z" fill="currentColor" />
            </svg>
          </button>
          
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <div className="dropdown-option">Kitchen price calculator</div>
            <div className="dropdown-option">Wardrobe price calculator</div>
            <div className="dropdown-option">Vanity price calculator</div>
            <div className="dropdown-option">Flooring price calculator</div>
            <div className="dropdown-option">Ceiling price calculator</div>
          </div>
        </div>

        <div className="consult-button">
          <button>Consult Online Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;