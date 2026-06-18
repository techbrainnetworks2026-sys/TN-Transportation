import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          Techbrain Networks <span className='sub-title'>Transportation</span>
        </Link>

        <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href={location.pathname === '/' ? '#home' : '/#home'} className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href={location.pathname === '/' ? '#about' : '/#about'} className="nav-links" onClick={closeMobileMenu}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href={location.pathname === '/' ? '#products' : '/#products'} className="nav-links" onClick={closeMobileMenu}>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href={location.pathname === '/' ? '#services' : '/#services'} className="nav-links" onClick={closeMobileMenu}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href={location.pathname === '/' ? '#careers' : '/#careers'} className="nav-links" onClick={closeMobileMenu}>
              Careers
            </a>
          </li>
          <li className="nav-item nav-btn">
            <a href={location.pathname === '/' ? '#contact' : '/#contact'} className="btn-primary" onClick={closeMobileMenu}>
              Contact 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
