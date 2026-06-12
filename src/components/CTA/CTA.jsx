import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-container glass-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Transportation Infrastructure?</h2>
            <p className="cta-desc">
              Join thousands of enterprises globally that trust Techbrain Networks for intelligent mobility solutions.
            </p>
          </div>
          <div className="cta-actions">
            <a href="#contact" className="btn-primary btn-large cta-btn">
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
