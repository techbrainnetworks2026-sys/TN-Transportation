import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact <span>Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get in touch with our experts to discuss your transportation technology needs.
          </motion.p>
        </div>
      </div>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-split">
            {/* Left: Contact Form */}
            <motion.div 
              className="contact-left glass-panel"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send us a <span>Message</span></h2>
              <form className="contact-form">
                <div className="input-group">
                  <input type="text" id="name" required placeholder=" " />
                  <label htmlFor="name">Full Name</label>
                </div>
                
                <div className="input-group">
                  <input type="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Email Address</label>
                </div>
                
                <div className="input-group">
                  <input type="text" id="subject" required placeholder=" " />
                  <label htmlFor="subject">Subject</label>
                </div>
                
                <div className="input-group">
                  <textarea id="message" rows="5" required placeholder=" "></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                
                <button type="submit" className="btn-primary btn-submit">Send Message</button>
              </form>
            </motion.div>

            {/* Right: Contact Cards & Map */}
            <motion.div 
              className="contact-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-cards">
                <div className="contact-card glass-panel">
                  <div className="contact-card-icon"><FaMapMarkerAlt /></div>
                  <div className="contact-card-content">
                    <h3>India Office</h3>
                    <p>6/12 Papa Vaikal Street, Ayyampettai Post, Papanasam Taluk, Thanjavur - 614201, Tamil Nadu, India.</p>
                  </div>
                </div>

                <div className="contact-card glass-panel">
                  <div className="contact-card-icon"><FaMapMarkerAlt /></div>
                  <div className="contact-card-content">
                    <h3>UK Office</h3>
                    <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.</p>
                  </div>
                </div>

                <div className="contact-card glass-panel flex-row">
                  <div className="contact-info-item">
                    <FaPhoneAlt className="info-icon" />
                    <span>+91 8754906714</span>
                  </div>
                  <div className="contact-info-item">
                    <FaEnvelope className="info-icon" />
                    <span>contact@techbrainnetworks.com</span>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link"><FaFacebookF /></a>
                  <a href="#" className="social-link"><FaTwitter /></a>
                  <a href="#" className="social-link"><FaLinkedinIn /></a>
                </div>
              </div>

              <div className="contact-map glass-panel">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472914041793!2d79.1360!3d10.8860!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUzJzA5LjYiTiA3OcKwMDgnMDkuNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  className="map-iframe"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
