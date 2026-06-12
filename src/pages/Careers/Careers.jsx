import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { careers } from '../../data/careers';
import './Careers.css';

const Careers = () => {
  return (
    <div className="careers-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our <span>Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Build the future of transportation technology with us. We are always looking for passionate innovators.
          </motion.p>
        </div>
      </div>

      <section className="section bg-dark">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Open <span>Positions</span></h2>
            <p className="section-subtitle">Discover opportunities across our global offices.</p>
          </div>

          <div className="jobs-grid">
            {careers.map((job, index) => (
              <motion.div 
                key={index}
                className="job-card glass-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.1, duration: 0.4 }}
              >
                <div className="job-card-header">
                  <div className="job-icon">
                    <FaBriefcase />
                  </div>
                  <span className="job-type">Full Time</span>
                </div>
                <h3 className="job-title">{job}</h3>
                
                <div className="job-meta">
                  <span><FaMapMarkerAlt /> India / UK</span>
                  <span><FaClock /> Flexible</span>
                </div>

                <div className="job-skills">
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">AI/ML</span>
                </div>

                <div className="job-action">
                  <button className="btn-primary w-100">Apply Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
