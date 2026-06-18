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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navHref = (hash) =>
    location.pathname === '/' ? hash : `/${hash}`;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">

        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <span className="logo-main">Techbrain Networks</span>
          <span className="logo-sub">Transportation</span>
        </Link>

        {/* Hamburger icon */}
        <div
          className="menu-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Nav links */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {[
            { label: 'Home',     hash: '#home' },
            { label: 'About Us', hash: '#about' },
            { label: 'Products', hash: '#products' },
            { label: 'Services', hash: '#services' },
            { label: 'Careers',  hash: '#careers' },
          ].map(({ label, hash }) => (
            <li className="nav-item" key={hash}>
              <a
                href={navHref(hash)}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {label}
              </a>
            </li>
          ))}

          <li className="nav-item nav-btn">
            <a
              href={navHref('#contact')}
              className="btn-primary"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
