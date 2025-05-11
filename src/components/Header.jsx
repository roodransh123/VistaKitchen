import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Auto-close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <Link to="/"><img src="/logo.jpg" alt="Logo" /></Link>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/wardrobes" onClick={toggleMenu}>Wardrobes</Link></li>
            <li><Link to="/kitchen" onClick={toggleMenu}>Kitchens</Link></li>
            <li><Link to="/vanities" onClick={toggleMenu}>Smart Furniture</Link></li>
            <li><Link to="/floorings" onClick={toggleMenu}>Floorings</Link></li>
            <li><Link to="/ceilings" onClick={toggleMenu}>Ceilings</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}><i className="fas fa-phone"></i></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
