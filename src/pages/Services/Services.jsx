import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import { services } from '../../data/services';
import CTA from '../../components/CTA/CTA';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span>Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            End-to-end engineering and design services for the modern enterprise.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon];
              return (
                <motion.div 
                  key={service.id}
                  className="service-detail-card glass-panel"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="service-detail-icon">
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className="service-detail-content">
                    <h2 className="service-detail-title">{service.title}</h2>
                    <p className="service-detail-desc">{service.description}</p>
                    
                    <div className="service-detail-grid">
                      <div>
                        <h3>Capabilities</h3>
                        <ul className="custom-list">
                          {service.capabilities.map((cap, i) => (
                            <li key={i}>{cap}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3>Technologies Used</h3>
                        <div className="tech-tags">
                          {service.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="service-detail-benefits">
                      <h3>Benefits</h3>
                      <p>{service.benefits}</p>
                    </div>

                    <div className="service-detail-action">
                      <Link to="/contact" className="btn-primary">Consult With Us</Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Services;
