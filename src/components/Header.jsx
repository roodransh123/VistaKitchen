import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu if the screen width is above 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <div className="header-top">
        <div className="logo-and-title">
          <div className="logo-placeholder">
            <a href="/" style={{ textDecoration: 'none', marginBottom: '10px' }}>
              <img src="/logo.jpg" alt="Logo" width="180" height="80" />
            </a>
          </div>
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/kitchen">Kitchens</Link></li>
            <li><Link to="/wardrobes">Wardrobes</Link></li>
            <li><Link to="/vanities">Vanities</Link></li>
            <li><Link to="/ceilings">Floorings</Link></li>
            <li><Link to="/panels">Ceilings</Link></li>
          </ul>
        </nav>

        <div className="profile" style={{ textAlign: 'right' }}>
          <a href="tel:+91 944 444 1111" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-phone" style={{ fontSize: '25px', color: 'black' }}></i>
          </a>
        </div>
      </div>


      {/* Header bottom retained only for styling */}
      <div className="header-bottom"></div>
    </header>
  );
}

export default Header;
