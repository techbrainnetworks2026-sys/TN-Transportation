import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import { FaGlobe, FaBriefcase, FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// Data imports
import { products } from '../../data/products';
import { industries } from '../../data/industries';
import { services } from '../../data/services';
import { careers } from '../../data/careers';

// Component imports
import Hero from '../../components/Hero/Hero';
import Stats from '../../components/Stats/Stats';
import ProductCard from '../../components/ProductCard/ProductCard';
import IndustryCard from '../../components/IndustryCard/IndustryCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTA from '../../components/CTA/CTA';

// Style imports
import './Home.css';
import '../../components/Hero/Hero.css';
import '../../components/Stats/Stats.css';
import '../../components/ProductCard/ProductCard.css';
import '../../components/IndustryCard/IndustryCard.css';
import '../../components/ServiceCard/ServiceCard.css';
import '../../components/Testimonials/Testimonials.css';
import '../../components/CTA/CTA.css';
import '../About/About.css';
import '../Transportation/Transportation.css';
import '../Services/Services.css';
import '../Careers/Careers.css';
import '../Contact/Contact.css';

const Home = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Techbrain Networks! Our specialists will get back to you shortly.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="home-page-scrollable">
      
      {/* 1. Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* 2. Stats & Overview */}
      <Stats />

      {/* 3. About Us Section */}
      <section id="about" className="section about-section-home">
        <div className="container">
          <div className="section-header text-center">

            <h2 className="section-title">About <span>Techbrain Networks </span></h2>
            <p className="section-subtitle">A leading Software Product Development company specializing in AI, IoT, Big Data, Blockchain, Cloud Computing, Quantum Computing, and Digital Marketing.</p>
          </div>

          <div className="about-grid">
            <motion.div 
              className="about-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Our Vision</h3>
              <p>"We aspire to be a global leader in technology innovation, shaping the future of smart mobility and digital transformation across industries worldwide."</p>
            </motion.div>
            <motion.div 
              className="about-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3>Our Mission</h3>
              <p>"We are dedicated to empowering businesses with cutting-edge, secure, and scalable solutions that solve complex challenges and drive sustainable growth."</p>
            </motion.div>
            <motion.div 
              className="about-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3>Our Passion</h3>
              <p>"Our passion for research and development fuels innovation. We constantly explore new frontiers in technology to create products that make a real-world impact."</p>
            </motion.div>
          </div>

          {/* Founder Feature */}
          <div className="founder-section-home">
            <div className="founder-image-container">
              <div className="founder-image-placeholder"></div>
            </div>
            <div className="founder-content">
              <h2>Meet Our <span>Founder</span></h2>
              <h3 className="founder-name">Ramkumar Arunachalam</h3>
              <p className="founder-title">Founder of Techbrain Networks</p>
              <p className="founder-desc">
                With a relentless drive for innovation, Ramkumar Arunachalam founded Techbrain Networks to bridge the gap between advanced emerging tech and practical industrial applications. Under his visionary leadership, Techbrain has expanded to cover 24 industries, driving 480 cutting-edge products with goals to dominate 30 countries from 2027 onwards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industries Overview Section */}
      <section className="section bg-dark industries-section-home">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">24 Industries <span>We Serve</span></h2>
            <p className="section-subtitle">Delivering high-tier, premium technology solutions across diverse sectors globally.</p>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <IndustryCard key={index} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Products Section */}
      <section id="products" className="section products-section-home">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Transportation <span>Products</span></h2>
            <p className="section-subtitle">Explore all 20 premium, enterprise-grade, futuristic transportation solutions.</p>
          </div>
          <div className="products-grid-full">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Services Section */}
      <section id="services" className="section bg-dark services-section-home">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core <span>Services</span></h2>
            <p className="section-subtitle">Leveraging state-of-the-art architectures to deliver reliable custom designs, hardware, software and research.</p>
          </div>
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
                      <a href="#contact" className="btn-primary">Consult With Us</a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="section why-choose-section-home">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose <span>Techbrain Networks</span></h2>
            <p className="section-subtitle">Unmatched technological excellence built for high-scale enterprise operations.</p>
          </div>
          <div className="why-choose-grid">
            <motion.div className="glass-panel text-center p-30" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="mb-10 color-cyan">480+ Innovations</h3>
              <p className="color-gray">Delivering an expansive portfolio of custom smart technology assets globally.</p>
            </motion.div>
            <motion.div className="glass-panel text-center p-30" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{delay: 0.1}}>
              <h3 className="mb-10 color-cyan">Enterprise Grade</h3>
              <p className="color-gray">Tailored fail-safes, military-grade security, and dynamic high-performance structures.</p>
            </motion.div>
            <motion.div className="glass-panel text-center p-30" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{delay: 0.2}}>
              <h3 className="mb-10 color-cyan">Global Expansion</h3>
              <p className="color-gray">Scaling footprint to exceed 30 countries by 2027 with direct infrastructure.</p>
            </motion.div>
          </div>

          <div className="tech-stack-section">
            <h3 className="text-center mb-20">Global Tech Ecosystem Stack</h3>
            <div className="tech-stack-flex">
              {['AI/ML', 'IoT', 'Big Data', 'Cloud', 'React', 'Node.js', 'Python', 'Kubernetes', 'Blockchain', 'MQTT', 'TensorFlow', 'PostgreSQL', 'Apache Kafka', 'Computer Vision'].map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <Testimonials />

      {/* 9. Careers Section */}
      <section id="careers" className="section bg-dark careers-section-home">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Careers at <span>Techbrain</span></h2>
            <p className="section-subtitle">Discover premium job opportunities across our design, testing, hardware, and software dev branches.</p>
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
                  <span><FaMapMarkerAlt /> Global Offices</span>
                  <span><FaClock /> Flexible Remote</span>
                </div>

                <div className="job-skills">
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">Edge Compute</span>
                  <span className="skill-badge">Next-Gen Tech</span>
                </div>

                <div className="job-action">
                  <button className="btn-primary w-100" onClick={() => alert(`Applying for ${job}... Application portal is open!`)}>Apply Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact Us Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Get in <span>Touch</span></h2>
            <p className="section-subtitle">Reach out to our engineering hubs in India and the UK to scale your digital logistics today.</p>
          </div>
          <div className="contact-split">
            {/* Left: Contact Form */}
            <motion.div 
              className="contact-left glass-panel"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send us a <span>Message</span></h2>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="input-group">
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder=" " 
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                
                <div className="input-group">
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder=" " 
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
                
                <div className="input-group">
                  <input 
                    type="text" 
                    id="subject" 
                    required 
                    placeholder=" " 
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
                
                <div className="input-group">
                  <textarea 
                    id="message" 
                    rows="5" 
                    required 
                    placeholder=" "
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                
                <button type="submit" className="btn-primary btn-submit">Send Message</button>
              </form>
            </motion.div>

            {/* Right: Contact Cards & Map */}
            <motion.div 
              className="contact-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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

      {/* 11. CTA Footer Section */}
      <CTA />
      
    </div>
  );
};

export default Home;
