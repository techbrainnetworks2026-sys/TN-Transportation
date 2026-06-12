import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import './IndustryCard.css';

const IndustryCard = ({ industry, index }) => {
  return (
    <motion.div 
      className="industry-card glass-panel"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.1, duration: 0.4 }}
    >
      <div className="industry-icon">
        <FaGlobe />
      </div>
      <h4 className="industry-name">{industry}</h4>
    </motion.div>
  );
};

export default IndustryCard;
