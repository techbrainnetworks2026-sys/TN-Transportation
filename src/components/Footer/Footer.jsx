import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import { industries } from '../../data/industries';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              Techbrain <span>Networks</span>
            </Link>
            <p className="footer-desc">
              Transforming Transportation Through Intelligent Mobility powered by AI, IoT, Automation, Big Data, and Smart Infrastructure.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#about">About Us</a></li>
              <li><Link to="/transportation">Transportation Products</Link></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#careers">Careers</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col links-col">
            <h3>Services</h3>
            <ul>
              <li><a href="/#services">Software Development</a></li>
              <li><a href="/#services">Hardware Development</a></li>
              <li><a href="/#services">Product Design</a></li>
              <li><a href="/#services">Research & Development</a></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  <strong>India Office:</strong><br />
                  6/12 Papa Vaikal Street, Ayyampettai Post, Papanasam Taluk, Thanjavur - 614201, Tamil Nadu, India.
                </span>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  <strong>UK Office:</strong><br />
                  71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK.
                </span>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <span>+91 8754906714</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>contact@techbrainnetworks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest updates on transportation technology.</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Techbrain Networks. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
