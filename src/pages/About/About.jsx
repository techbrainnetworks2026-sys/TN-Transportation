import React from 'react';
import { motion } from 'framer-motion';
import Stats from '../../components/Stats/Stats';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span>Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Techbrain Networks is a leading Software Product Development company specializing in AI, IoT, Big Data, Blockchain, Cloud Computing, Quantum Computing and Digital Marketing.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Our Vision</h3>
              <p>"We aspire to be a global leader in technology innovation, shaping the future of smart mobility and digital transformation across industries worldwide."</p>
            </motion.div>
            <motion.div 
              className="about-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>Our Mission</h3>
              <p>"We are dedicated to empowering businesses with cutting-edge, secure, and scalable solutions that solve complex challenges and drive sustainable growth."</p>
            </motion.div>
            <motion.div 
              className="about-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Our Passion</h3>
              <p>"Our passion for research and development fuels innovation. We constantly explore new frontiers in technology to create products that make a real-world impact."</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="founder-section">
            <div className="founder-image-container">
              <div className="founder-image-placeholder"></div>
            </div>
            <div className="founder-content">
              <h2>Meet Our <span>Founder</span></h2>
              <h3 className="founder-name">Ramkumar Arunachalam</h3>
              <p className="founder-title">Founder & CEO, Techbrain Networks</p>
              <p className="founder-desc">
                With a relentless drive for innovation, Ramkumar Arunachalam founded Techbrain Networks with the vision to bridge the gap between advanced technology and enterprise needs. Under his leadership, the company has rapidly grown to serve 24 industries with 480 cutting-edge products, preparing to expand into 30 countries by 2027.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Global <span>Goals</span></h2>
            <p className="section-subtitle">Driving worldwide technological evolution.</p>
          </div>
          <Stats />
        </div>
      </section>
    </div>
  );
};

export default About;
