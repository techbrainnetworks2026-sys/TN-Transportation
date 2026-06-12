import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  const IconComponent = Icons[service.icon];

  return (
    <motion.div 
      className="service-card glass-panel"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="service-icon-wrapper">
        {IconComponent && <IconComponent className="service-icon" />}
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.description}</p>
      
      <div className="service-details">
        <h4>Capabilities:</h4>
        <ul>
          {service.capabilities.map((cap, i) => (
            <li key={i}>{cap}</li>
          ))}
        </ul>
      </div>
      
      <div className="service-action">
        <button className="btn-primary btn-sm">Learn More</button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
